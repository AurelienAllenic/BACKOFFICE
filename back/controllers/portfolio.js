const PortfolioModel = require('../models/Portfolio');

// CREATE
exports.create = (req, res, next) => {
    delete req.body.id;
    const portfolio = new PortfolioModel({
        ...req.body
    });
    portfolio.save()
        .then(() => res.status(201).json({ message: `Portfolio ${portfolio.title} enregistré !`, portfolio}))
        .catch(error => res.status(400).json({ error }));
};
// UPDATE
exports.update = (req, res, next) => {
    PortfolioModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Portfolio modifié !'}))
        .catch(error => res.status(400).json({ error }));
};
// DELETE
exports.delete = (req, res, next) => {
    PortfolioModel.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Portfolio supprimé !'}))
        .catch(error => res.status(400).json({ error }));
};
// READ ONE
exports.findOne = (req, res, next) => {
    PortfolioModel.findOne({ _id: req.params.id })
        .then(portfolio => res.status(200).json(portfolio))
        .catch(error => res.status(404).json({ error }));
};
// READ ALL
exports.findAll = (req, res, next) => {
    PortfolioModel.find()
        .then(portfolios => res.status(200).json(portfolios))
        .catch(error => res.status(400).json({ error }));
};
