const { application } = require('express');
const express = require('express');
const router = express.Router();

// require de mainControllers pour la redirection des routes
const mainController = require('./controllers/mainController');

// Mes routes
router.get('/', mainController.getHomePage);

router.get('/mon_cv_en_ligne', mainController.getCvPage);

router.get('/mes_projets_numeriques', mainController.getProjetsPage);

router.get('/contact', mainController.getContactPage);

// Je rends disponible mon router
module.exports = router;
