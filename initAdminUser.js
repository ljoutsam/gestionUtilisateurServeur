// initAdminUser.js
const users = require('./data/users.js'); // Importez les utilisateurs

const initializeAdminUser = () => {
    const adminEmail = 'admin@test.com';
    const existingAdmin = users.find(user => user.email === adminEmail);

    if (!existingAdmin) {
        const adminUser = {
            id: users.length + 1,
            nom: 'Admin',
            prenom: 'User',
            dateNaissance: '1970-01-01',
            telephone: '0000000000',
            email: adminEmail,
            role: 'admin'
        };
        users.push(adminUser);
        console.log('Admin user created');
    } else {
        console.log('Admin user already exists.');
    }
};

module.exports = initializeAdminUser;
