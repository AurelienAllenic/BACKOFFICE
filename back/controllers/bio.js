const AccueilModel = require('../models/Bio');

// CREATE
exports.create = (req, res, next) => {
    delete req.body.id;
    const bio = new BioModel({
        ...req.body
    });
    bio.save()
        .then(() => res.status(201).json({ message: `Bio ${bio.title} enregistrée !`, bio}))
        .catch(error => res.status(400).json({ error }));
};
// UPDATE
exports.update = (req, res, next) => {
    BioModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Bio modifiée !'}))
        .catch(error => res.status(400).json({ error }));
};
// DELETE
exports.delete = (req, res, next) => {
    BioModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Bio supprimée !'}))
        .catch(error => res.status(400).json({ error }));
};
// READ ONE
exports.findOne = (req, res, next) => {
    BioModel.findOne({ _id: req.params.id })
        .then(bio => res.status(200).json(bio))
        .catch(error => res.status(404).json({ error }));
};
// READ ALL
exports.findAll = (req, res, next) => {
    BioModel.find()
        .then(bios => res.status(200).json(bios))
        .catch(error => res.status(400).json({ error }));
};
