const { isEmail } = require('validator');
const dns = require('dns');
const nodemailer = require('nodemailer');

// Valider si l'email est au bon format
exports.isValidEmail = (email) => {
  return email && isEmail(email);
};

// Vérifier les domaines des emails 
exports.checkMXRecords = async (domain) => {
  return new Promise((resolve, reject) => {
    dns.resolveMx(domain, (err, addresses) => {
      if (err) {
        if (err.code === 'ENOTFOUND' || err.code === 'ENODATA') {
          resolve(false); 
        } else {
          reject(err); 
        }
      } else {
        resolve(addresses.length > 0);
      }
    });
  });
};

// Extraire le domaine à partir de l'adresse e-mail
exports.extractDomain = (email) => {
  const parts = email.split('@');
  return parts[1];
};

// Valider la sécurité du mot de passe
exports.isSecurePassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password);
};

// Vérifier le nom et le prénom
exports.isValidName = (name) => {
  return name && /^[a-zA-ZÀ-ÿ '-]{2,50}$/.test(name);
};

// Vérifier le userName
exports.isValidUserName = (userName) => {
  return userName && /^[a-zA-Z0-9_.-]{4,20}$/.test(userName);
};

// Envoi d'email
exports.sendRecoveryEmail = async (email, code) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASSWORD
        }
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Réinitialisation de mot de passe',
        text: `Bonjour,\n\nVoici votre code de réinitialisation de mot de passe : ${code}\n\nCordialement,\nVotre équipe Dallya`
      };
  
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail de récupération :', error);
      throw new Error('Une erreur est survenue lors de l\'envoi de l\'e-mail de récupération.');
    }
};