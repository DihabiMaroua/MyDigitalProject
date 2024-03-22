const bcrypt = require('bcrypt');
const User = require('../models/user');
const UserProfile = require('../models/userProfile');
const validators = require('../utils/validators');
const PasswordResetCode = require('../models/passwordResetCodes');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 10; 

/*** créer un compte ***/
exports.createUser = async ({ firstName, lastName, userName, email, password, birthDate }) => {
    // Vérification de tous les champs requis
    if (!firstName || !lastName || !userName || !email || !password || !birthDate) {
        throw { statusCode: 400, message: 'Tous les champs sont requis.' };
    }

    // Validation de l'âge minimum
    const ageMinimum = 16;
    const today = new Date();
    const dateOfBirth = new Date(birthDate);
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDiff = today.getMonth() - dateOfBirth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
        age--;
    }
    if (age < ageMinimum) {
        throw { statusCode: 400, message: `Vous devez avoir au moins ${ageMinimum} ans pour vous inscrire.` };
    }

    // Vérification de l'unicité de l'email et du userName
    const existingUser = await User.findOne({ where: { [Op.or]: [{ email }, { userName }] } });
    if (existingUser) {
        if (existingUser.email === email) {
        throw { statusCode: 400, message: 'Cet email est déjà utilisé.' };
        } else {
        throw { statusCode: 400, message: 'L\'identifiant est déjà utilisé.' };
        }
    }

    // Utilisation des validateurs pour vérifier les champs
    if (!validators.isValidName(firstName) || !validators.isValidName(lastName)) {
        throw { statusCode: 400, message: 'Le prénom et le nom doivent contenir uniquement des lettres alphabétiques, des espaces, des tirets ou des apostrophes, et avoir une longueur comprise entre 2 et 50 caractères.' };
    }
    if (!validators.isValidUserName(userName)) {
        throw { statusCode: 400, message: 'L\'identifiant ne peut contenir que des lettres, des chiffres, des points ou des tirets, et doit avoir une longueur comprise entre 4 et 20 caractères.' };
    }
    if (!validators.isValidEmail(email) || !await validators.checkMXRecords(validators.extractDomain(email))) {
        throw { statusCode: 400, message: 'L\'email fourni n\'est pas valide.' };
    }
    if (!validators.isSecurePassword(password)) {
        throw { statusCode: 400, message: 'Le mot de passe doit contenir au moins 8 caractères et inclure au moins une minuscule, une majuscule, un chiffre et un caractère spécial.' };
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur et de son profil dans la base de données
    const newUser = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password: hashedPassword,
        isActive: true
    });
    await UserProfile.create({
        birthDate,
        idUser: newUser.id 
    });

    return newUser;
};

/*** se connecter ***/
exports.loginUser = async (identifier, password, remember) => {
    if (!identifier || !password) {
      throw { statusCode: 400, message: 'L\'identifiant et le mot de passe sont requis.' };
    }
  
    const whereClause = validators.isValidEmail(identifier) ? { email: identifier } : { userName: identifier };
    const user = await User.findOne({ where: whereClause });
  
    if (!user) {
      throw { statusCode: 400, message: 'L\'e-mail ou l\'identifiant est incorrect.' };
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw { statusCode: 400, message: 'Le mot de passe est incorrect.' };
    }
  
    const token = jwt.sign({  idUser: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return {
      token: token,
      maxAge: remember ? 7 * 24 * 60 * 60 * 1000 : 3600 * 1000 // 1 heure par défaut, 7 jours si remember est activé
    };
};

/*** mdp oublié ***/
exports.handlePasswordResetReset = async (email, code, newPassword, step) => {
        let user;
        user = await User.findOne({ where: { email } });

        if (step === 'email') {

            if (!email) {
                throw { statusCode: 400, message: 'L\'email est requis.' };
            }

            if (!user) {
                throw { statusCode: 400, message: 'Aucun compte n\'est associé à cet e-mail.' };
            }
    
            const existingResetCode = await PasswordResetCode.findOne({ 
                where: { idUser: user.id, status: 'pending' } 
            });
            if (existingResetCode) {
                throw { statusCode: 400, message: 'Un code de réinitialisation est déjà en cours d\'envoi.' };
            }
    
            const recoveryCode = Math.random().toString(36).substring(7).toUpperCase();
            const hashedRecoveryCode = await bcrypt.hash(recoveryCode, SALT_ROUNDS);
    
            await PasswordResetCode.create({
                code: hashedRecoveryCode, 
                expiration: new Date(), 
                idUser: user.id,
                status: 'pending'
            });

            setTimeout(async () => {
                const resetCode = await PasswordResetCode.findOne({ where: { code: hashedRecoveryCode } });
                if (resetCode) {
                    await resetCode.destroy();
                }
            }, 600000); // 60s *10
        
    
            await validators.sendRecoveryEmail(email, recoveryCode);
            throw { statusCode: 200, message: 'Un e-mail de récupération a été envoyé avec succès.' };
        } else if (step === 'code') {
            // Étape 2: Vérifier si le code de récupération est valide
            if (!code) {
                throw { statusCode: 400, message: 'Le code de récupération est requis.'};
            }

            const resetCode = await PasswordResetCode.findOne({
                where: { idUser: user.id, status: 'pending' }
            });            
            if (!resetCode || !await bcrypt.compare(code, resetCode.code)) {
                throw { statusCode: 400, message: 'Code de récupération invalide ou expiré.' };
            }    
            throw { statusCode: 200, message: 'Code de récupération valide.'};
        } else if (step === 'password') {
            // Étape 3: Réinitialiser le mot de passe
            const resetCode = await PasswordResetCode.findOne({
                where: { idUser: user.id, status: 'pending' }
            });            
            if (!resetCode || !await bcrypt.compare(code, resetCode.code)) {
                throw { statusCode: 400, message: 'Code de récupération invalide ou expiré.' };
            } 
        
            if (!newPassword) {
                throw { statusCode: 400, message: 'Le mot de passe est requis.' };
            }
            if (!validators.isSecurePassword(newPassword)) {
                throw { statusCode: 400, message: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.'};
            }
        
            if (!user) {
                throw { statusCode: 400, message: 'Aucun compte n\'est associé à cet e-mail.' };
            }
        
            // Hasher le nouveau mot de passe
            const hashedPassword = await bcrypt.hash(newPassword, 10);
        
            // Mettre à jour le mot de passe de l'utilisateur
            await user.update({ password: hashedPassword });
        
            // Supprimer le code de récupération de la base de données après utilisation
            await resetCode.destroy();
            throw { statusCode: 200, message: 'Mot de passe réinitialisé avec succès.' };
        } else {
            throw { statusCode: 400, message: 'Étape invalide.' };
        }
};