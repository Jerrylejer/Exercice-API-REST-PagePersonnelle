// Je require les données datas de mon fichier json
const experiencePro = require('../data/experience.json');
//? => Je veux les envoyer à ma vue => Je la mets en objet dans res.render

const CvPageController = {
    //? Page principale du cv
    getCvPage: (req, res) => {
        res.render('cvEnLigne', { experiencePro });
        //? => Je rends ma vue puis l'objet entre {}
        //? => {SiMêmeNomDonné} ou {NomDifférent: NomVariableJson}
    },

    //? Détails par postes de mon expérience
    getEmploisPage: (req, res) => {
        // Je récupère la valeur du paramètre de l'url
        const jobId = Number(req.params.id);
        // Suivant le poste cliqué, je veux uniquement renvoyer les infos liées à ce poste
        let currentPost;
        for (let item of experiencePro) {
            // Si mon post.id est strictement égale au params de l'url
            if (item.id === jobId) {
                // Ma variable currentPost prend la valeur de post
                currentPost = item;
            }
        }
        //? Je rends ma vue emploi.ejs à laquelle je passe UN seul poste
        res.render('emplois', { item: currentPost });
    },
};
module.exports = CvPageController;
