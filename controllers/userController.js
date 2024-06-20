const users = require('../data/users.js');

const getUsers = (req, res) => {
    res.json(users);
};

const getUser = (req, res) => {
    const id = Number(req.params.userID);
    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
};

const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        nom: req.body.nom,
        prenom: req.body.prenom,
        dateNaissance: req.body.dateNaissance,
        telephone: req.body.telephone,
        email: req.body.email,
        role: req.body.role || 'user'
    };
    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const id = Number(req.params.userID);
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).send('User not found');
    }

    const updatedUser = {
        ...users[index],
        nom: req.body.nom,
        prenom: req.body.prenom,
        dateNaissance: req.body.dateNaissance,
        telephone: req.body.telephone,
        email: req.body.email,
        role: req.body.role
    };
    users[index] = updatedUser;
    res.status(200).json('User updated');
};

const updateUserRole = (req, res) => {
    const id = Number(req.params.userID);
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).send('User not found');
    }

    users[index].role = req.body.role; // Mise à jour du rôle
    res.status(200).json('User role updated');
};

const deleteUser = (req, res) => {
    const id = Number(req.params.userID);
    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).send('User not found');
    }

    users.splice(index, 1);
    res.status(200).json('User deleted');
};

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    updateUserRole
};
