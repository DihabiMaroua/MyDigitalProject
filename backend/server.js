const express = require('express');
const app = express();
const sequelize = require('./src/config/sequelize');
app.use(express.json()); // Middleware pour analyser les requêtes au format JSON
const cors = require('cors');
app.use(cors());

// Synchronisation de la base de données avec Sequelize
sequelize.sync().then(() => {
  console.log("Database synchronized successfully");
}).catch(error => {
  console.error('Unable to synchronize the database:', error);
});

// Importer les routes
const userRoutes = require('./src/routes/userRoutes');

// Utiliser les routes
app.use('/api/users', userRoutes);


// Route racine
app.get('/', (req, res) => {
  res.send('Dallya');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

