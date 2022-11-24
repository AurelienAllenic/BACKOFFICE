const PortfolioModel = require('../models/Portfolio');

// CREATE
exports.create = (req, res, next) => {
    console.log(req.body);
    const portfolioObject = req.body;
    console.log(req.auth);
    delete portfolioObject._id;
    const portfolio = new PortfolioModel({
      ...portfolioObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get("host")}/assets/images/${
        req.file.filename
      }`
    });
    portfolio
      .save()
      .then(() => {
        res.status(201).json({ message: "Portfolio enregistré !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };
// UPDATE
exports.update = (req, res, next) => {
  const portfolioObject = req.file
  ? {
      ...req.body,
      imageUrl: `${req.protocol}://${req.get("host")}/../../assets/images/${
        req.file.filename
      }`,
    }
  : { ...req.body };

delete portfolioObject._userId;
PortfolioModel.findOne({ _id: req.params.id })
  .then((portfolio) => {
      PortfolioModel.updateOne(
        { _id: req.params.id },
        { ...portfolioObject, _id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Portfolio modifié!" }))
        .catch((error) => res.status(401).json({ error }));
    })
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
