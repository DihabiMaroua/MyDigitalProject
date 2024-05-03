const express = require('express');
const app = express();
const sequelize = require('./src/config/sequelize');
app.use(express.json()); // Middleware pour analyser les requêtes au format JSON
const cors = require('cors');
app.use(cors());
require('./src/models/associations');

// Synchronisation de la base de données avec Sequelize
sequelize.sync().then(() => {
  console.log("Database synchronized successfully");
}).catch(error => {
  console.error('Unable to synchronize the database:', error);
});

// Importer les routes
const userRoutes = require('./src/routes/userRoutes');
const productRoutes = require('./src/routes/productRoutes');
const wishlistRoutes = require('./src/routes/wishlistRoutes');

// Utiliser les routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/wishlists', wishlistRoutes);

// Route racine
app.get('/', (req, res) => {
  res.send('Dallya');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
