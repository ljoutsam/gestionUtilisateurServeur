# API de Gestion des Utilisateurs

Cette API permet de gérer les utilisateurs avec les opérations CRUD (Create, Read, Update, Delete). Elle est documentée à l'aide de OpenAPI et Swagger pour une meilleure compréhension et facilité d'utilisation.

## Endpoints

- **GET /api/users** : Récupérer tous les utilisateurs.
- **GET /api/users/{userID}** : Récupérer un utilisateur par ID.
- **POST /api/users** : Créer un nouvel utilisateur.
- **PUT /api/users/{userID}** : Mettre à jour un utilisateur par ID.
- **DELETE /api/users/{userID}** : Supprimer un utilisateur par ID.



## Exemples de Requêtes cURL

Voici quelques exemples de requêtes cURL pour interagir avec l'API :

### Login
curl -X POST http://localhost:5000/api/login -H "Content-Type: application/json" -d '{"nom": "Admin", "email": "admin@test.com"}'

### Récupérer tous les utilisateurs

curl -X GET http://localhost:5000/api/users

### Récupérer un utilisateur par ID (remplacez {userID} par l'ID réel) :

curl -X GET http://localhost:5000/api/users/{userID}

#### Créer un nouvel utilisateur :
curl -X POST http://localhost:5000/api/users -H "Content-Type: application/json" -d '{"nom": "Doe", "prenom": "John", "dateNaissance": "1990-01-01", "telephone": "+1234567890", "email": "john.doe@example.com"}'


### Mettre à jour un utilisateur par ID (remplacez {userID} par l'ID réel) :
curl -X PUT http://localhost:5000/api/users/{userID} -H "Content-Type: application/json" -d '{"nom": "Doe", "prenom": "John", "dateNaissance": "1990-01-01", "telephone": "+1234567890", "email": "john.doe@example.com"}'

### Mettre à jour un role par ID (remplacez {userID} par l'ID réel) :
curl -X PUT http://localhost:5000/users/{userID}/role -H 'Content-Type: application/json' -d '{"role": "admin"}'


### Supprimer un utilisateur par ID (remplacez {userID} par l'ID réel) :

curl -X DELETE http://localhost:5000/api/users/{userID}

## Installation et Configuration
Pour installer et exécuter cette API localement :

- Cloner le projet depuis GitHub :

- Installer les dépendances :
npm install

- Démarrer l'API :
node app.js
