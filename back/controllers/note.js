const NoteModel = require('../models/Note');

// CREATE
exports.create = (req, res, next) => {
    delete req.body.id;
    const note = new NoteModel({
        ...req.body
    });
    note.save()
        .then(() => res.status(201).json({ message: `Note ${note.title} enregistrée !`, note}))
        .catch(error => res.status(400).json({ error }));
};
// UPDATE
exports.update = (req, res, next) => {
    NoteModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Note modifiée !'}))
        .catch(error => res.status(400).json({ error }));
};
// DELETE
exports.delete = (req, res, next) => {
    NoteModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Note supprimée !'}))
        .catch(error => res.status(400).json({ error }));
};
// READ ONE
exports.findOne = (req, res, next) => {
    NoteModel.findOne({ _id: req.params.id })
        .then(note => res.status(200).json(note))
        .catch(error => res.status(404).json({ error }));
};
// READ ALL
exports.findAll = (req, res, next) => {
    NoteModel.find()
        .then(notes => res.status(200).json(notes))
        .catch(error => res.status(400).json({ error }));
};
