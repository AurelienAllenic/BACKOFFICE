const ContactModel = require('../models/Contact');

exports.create = (req, res, next) => {
    console.log(req.body);
    const contactObject = req.body;
    console.log(req.auth);
    delete contactObject._id;
    const contact = new ContactModel({
      ...contactObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get("host")}/assets/images/${
        req.file.filename
      }`
    });
    contact
      .save()
      .then(() => {
        res.status(201).json({ message: "Contact enregistré !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };
// UPDATE
exports.update = (req, res, next) => {
    const contactObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/../../assets/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  
  delete contactObject._userId;
  ContactModel.findOne({ _id: req.params.id })
    .then((contact) => {
        ContactModel.updateOne(
          { _id: req.params.id },
          { ...contactObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Contact modifié!" }))
          .catch((error) => res.status(401).json({ error }));
      })
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
