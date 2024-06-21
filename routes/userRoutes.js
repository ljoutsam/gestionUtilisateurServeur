const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    updateUserRole,
    isAuthenticated,
    login,
    logout
} = require('../controllers/userController');

// Route pour se connecter (login)
router.post('/login', login);

// Route pour se déconnecter (logout)
router.post('/logout', logout);

router.get('/users', isAuthenticated, getUsers);
router.get('/users/:userID', isAuthenticated, getUser);
router.post('/users', isAuthenticated, createUser);
router.put('/users/:userID', isAuthenticated, updateUser);
router.delete('/users/:userID', isAuthenticated, deleteUser);
router.put('/users/:userID/role', isAuthenticated, updateUserRole);

module.exports = router;
