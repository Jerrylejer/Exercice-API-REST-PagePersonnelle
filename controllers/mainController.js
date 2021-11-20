// Je regroupe dans mainController l'ensemble des callbacks des routes
// On peut aussi créer un controller par page ou par grand concept

const mainController = {
    getHomePage: (req, res) => {
        res.render('home');
    },

    getCvPage: (req, res) => {
        res.render('cvEnLigne');
    },

    getProjetsPage: (req, res) => {
        res.render('projets');
    },

    getContactPage: (req, res) => {
        res.render('contact');
    },
};

module.exports = mainController;
