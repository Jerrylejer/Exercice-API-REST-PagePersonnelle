// J'installe dotenv pour la lecture des variables d'environnement sous window
require('dotenv').config();

// Je require le module Express
const express = require('express');
const app = express();

// Je require le module router
const router = require('./router');

// J'envoie ma const port en .env
const PORT = process.env.PORT || 5050;

// Installation du moteur des vues, spécification du dossier et du chemin
app.set('view engine', 'ejs');
app.set('views', './views');

// J'installe mes statics => index.html étant dans les statics
app.use(express.static('./public'));

// J'utilise mon router
app.use(router);

// J'ouvre mon serveur sur un port
app.listen(PORT, () => {
    console.log(
        `le serveur est ouvert sur le port ${PORT} à l'adresse http://localhost:${PORT}`
    );
});
