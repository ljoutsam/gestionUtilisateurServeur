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
    const { nom, prenom, dateNaissance, telephone, email, role } = req.body;

    // Vérifiez si l'email existe déjà
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).send('Email already exists');
    }

    const newUser = {
        id: users.length + 1,
        nom,
        prenom,
        dateNaissance,
        telephone,
        email,
        role: role || 'user' // Rôle par défaut 'user'
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

    const { nom, prenom, dateNaissance, telephone, email, role } = req.body;

    // Vérifiez si l'email mis à jour existe déjà pour un autre utilisateur
    const existingUser = users.find(user => user.email === email && user.id !== id);
    if (existingUser) {
        return res.status(409).send('Email already exists');
    }

    const updatedUser = {
        ...users[index],
        nom,
        prenom,
        dateNaissance,
        telephone,
        email,
        role
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

// Fonction pour trouver un utilisateur par email et nom
const authenticateUser = (email, nom) => {
    return users.find(user => user.email === email && user.nom === nom);
};



// Middleware pour vérifier l'authentification
const isAuthenticated = (req, res, next) => {
    const email = req.headers['email'];
    const nom = req.headers['nom'];

    if (!email || !nom) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = authenticateUser(email, nom);
    if (user) {
        req.user = user;
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

const login = (req, res) => {
    const { nom, email } = req.body;
    console.log('Trying to login with:', nom, email);
    const user = authenticateUser(email, nom);
    console.log('Found user:', user);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(401).send('Invalid credentials');
    }
};


// Fonction de logout
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.clearCookie('sessionId'); 
            res.status(200).send('Logged out successfully');
        }
    });
};

  

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    updateUserRole,
    login,
    logout,
    isAuthenticated
};
