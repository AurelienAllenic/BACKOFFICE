const ContactModel = require('../models/Contact');

// CREATE
exports.create = (req, res, next) => {
    delete req.body.id;
    const contact = new ContactModel({
        ...req.body
    });
    contact.save()
        .then(() => res.status(201).json({ message: `Contact ${contact.title} enregistré !`, contact}))
        .catch(error => res.status(400).json({ error }));
};
// UPDATE
exports.update = (req, res, next) => {
    ContactModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Contact modifié !'}))
        .catch(error => res.status(400).json({ error }));
};
// DELETE
exports.delete = (req, res, next) => {
    ContactModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Contact supprimé !'}))
        .catch(error => res.status(400).json({ error }));
};
// READ ONE
exports.findOne = (req, res, next) => {
    ContactModel.findOne({ _id: req.params.id })
        .then(contact => res.status(200).json(contact))
        .catch(error => res.status(404).json({ error }));
};
// READ ALL
exports.findAll = (req, res, next) => {
    ContactModel.find()
        .then(contacts => res.status(200).json(contacts))
        .catch(error => res.status(400).json({ error }));
};
