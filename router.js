const { application } = require('express');
const express = require('express');
const router = express.Router();

// require de mainControllers pour la redirection des routes
const mainController = require('./controllers/mainController');
const cvPageController = require('./controllers/cvPageController');
const projetsPageController = require('./controllers/projetsPageController');
const contactPageController = require('./controllers/contactPageController');

// Route principale
router.get('/', mainController.getHomePage);

// Routes de mon CV
router.get('/mon_cv_en_ligne', cvPageController.getCvPage);
router.get('/mon_cv_en_ligne/:id', cvPageController.getEmploisPage);

// Routes des projets numériques
router.get('/mes_projets_numeriques', projetsPageController.getProjetsPage);

// Routes des contacts
router.get('/contact', contactPageController.getContactPage);

// Je rends disponible mon router
module.exports = router;
