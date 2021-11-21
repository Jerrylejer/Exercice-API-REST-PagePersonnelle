// Je regroupe dans mainController l'ensemble des callbacks des routes
// On peut aussi créer un controller par page ou par grand concept

const mainController = {
    getHomePage: (req, res) => {
        res.render('home');
    },
};

module.exports = mainController;
