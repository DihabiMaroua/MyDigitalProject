const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.login);
router.post('/logout', userController.logoutUser);
router.post('/reset-password', userController.resetPassword);
router.put('/user/:id', userController.updateUser);

module.exports = router;
