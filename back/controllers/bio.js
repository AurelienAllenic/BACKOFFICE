const BioModel = require('../models/Bio');

exports.create = (req, res, next) => {
    console.log(req.body);
    const bioObject = req.body;
    console.log(req.auth);
    delete bioObject._id;
    const bio = new BioModel({
      ...bioObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get("host")}/assets/images/${
        req.file.filename
      }`
    });
    bio
      .save()
      .then(() => {
        res.status(201).json({ message: "Bio enregistrée !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };
// UPDATE
exports.update = (req, res, next) => {
    const bioObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/../../assets/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  
  delete bioObject._userId;
  BioModel.findOne({ _id: req.params.id })
    .then((bio) => {
        BioModel.updateOne(
          { _id: req.params.id },
          { ...bioObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Bio modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      })
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
