const AccueilModel = require('../models/Accueil');

// CREATE
exports.create = (req, res, next) => {
    delete req.body.id;
    const accueil = new AccueilModel({
        ...req.body
    });
    accueil.save()
        .then(() => res.status(201).json({ message: `Accueil ${accueil.title} enregistré !`, accueil}))
        .catch(error => res.status(400).json({ error }));
};
// UPDATE
exports.update = (req, res, next) => {
    AccueilModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Accueil modifié !'}))
        .catch(error => res.status(400).json({ error }));
};
// DELETE
exports.delete = (req, res, next) => {
    AccueilModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Note supprimée !'}))
        .catch(error => res.status(400).json({ error }));
};
// READ ONE
exports.findOne = (req, res, next) => {
    AccueilModel.findOne({ _id: req.params.id })
        .then(accueil => res.status(200).json(accueil))
        .catch(error => res.status(404).json({ error }));
};
// READ ALL
exports.findAll = (req, res, next) => {
    AccueilModel.find()
        .then(accueils => res.status(200).json(accueils))
        .catch(error => res.status(400).json({ error }));
};
