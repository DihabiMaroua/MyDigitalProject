const userService = require('../services/userService');

//créer un compte 
exports.registerUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(error.statusCode || 500).json({ error: error.message || 'Une erreur est survenue lors de la création de l\'utilisateur.' });
    }
};

//se connecter 
exports.login = async (req, res) => {
    try {
      const { identifier, password, remember } = req.body;
      const token = await userService.loginUser(identifier, password, remember);
      res.cookie('token', token.token, { httpOnly: true, maxAge: token.maxAge });
      res.json({ token: token.token });
    } catch (error) {
      console.error(error);
      res.status(error.statusCode || 500).json({ error: error.message || 'Une erreur est survenue lors de la connexion.' });
    }
};

//se deconnecter
exports.logoutUser = (req, res) => {
    // Supprimer le cookie de token 
    res.cookie('token', '', { expires: new Date(0) });
    res.json({ message: 'Déconnexion réussie.' });
};
  
//mdp oublié 
exports.resetPassword = async (req, res) => {
    try {
        const { email, code, newPassword, step } = req.body;
        const message = await userService.handlePasswordResetReset(email, code, newPassword, step);
        res.json({ message });
    } catch (error) {
      console.error("Erreur dans le contrôleur de réinitialisation du mot de passe:", error.message);
      res.status(error.statusCode || 500).json({ error: error.message || 'Une erreur est survenue lors de la réinitialisation du mot de passe.' });
    }
};
