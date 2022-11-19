const ExperienceModel = require('../models/Experience');

// CREATE
exports.create = (req, res, next) => {
    delete req.body.id;
    const experience = new ExperienceModel({
        ...req.body
    });
    experience.save()
        .then(() => res.status(201).json({ message: `Experience ${experience.title} enregistrée !`, experience}))
        .catch(error => res.status(400).json({ error }));
};
// UPDATE
exports.update = (req, res, next) => {
    ExperienceModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Experience modifiée !'}))
        .catch(error => res.status(400).json({ error }));
};
// DELETE
exports.delete = (req, res, next) => {
    ExperienceModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Experience supprimée !'}))
        .catch(error => res.status(400).json({ error }));
};
// READ ONE
exports.findOne = (req, res, next) => {
    ExperienceModel.findOne({ _id: req.params.id })
        .then(experience => res.status(200).json(experience))
        .catch(error => res.status(404).json({ error }));
};
// READ ALL
exports.findAll = (req, res, next) => {
    ExperienceModel.find()
        .then(experiences => res.status(200).json(experiences))
        .catch(error => res.status(400).json({ error }));
};
