const express = require('express');
const app = express();
const users = require('./data/users.js')
const userRoutes = require('./routes/userRoutes');
const initializeAdminUser = require('./initAdminUser');

app.use(express.json()); // Pour parser le JSON dans les requêtes

app.use('/api', userRoutes);

initializeAdminUser();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

