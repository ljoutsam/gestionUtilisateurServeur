const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

router.get('/users', getUsers);
router.get('/users/:userID', getUser);
router.post('/users', createUser);
router.put('/users/:userID', updateUser);
router.delete('/users/:userID', deleteUser);

module.exports = router;
