const ExperienceModel = require('../models/Experience');

// CREATE
exports.create = (req, res, next) => {
    console.log(req.body);
    const experienceObject = req.body;
    console.log(req.auth);
    delete experienceObject._id;
    const experience = new ExperienceModel({
      ...experienceObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get("host")}/assets/images/${
        req.file.filename
      }`
    });
    experience
      .save()
      .then(() => {
        res.status(201).json({ message: "Experience enregistrée !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };
// UPDATE
exports.update = (req, res, next) => {
    const experienceObject = req.file
    ? {
        ...req.body,
        imageUrl: `${req.protocol}://${req.get("host")}/../../assets/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  
  delete experienceObject._userId;
  ExperienceModel.findOne({ _id: req.params.id })
    .then((experience) => {
        ExperienceModel.updateOne(
          { _id: req.params.id },
          { ...experienceObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Experience modifiée!" }))
          .catch((error) => res.status(401).json({ error }));
      })
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
