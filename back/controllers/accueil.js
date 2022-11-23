const express = require("express");
const router = express.Router();
const AccueilModel = require('../models/Accueil');
const fs = require("fs");

exports.create = (req, res, next) => {
    console.log(req.body);
    const accueilObject = req.body;
    console.log(req.auth);
    delete accueilObject._id;
    const accueil = new AccueilModel({
      ...accueilObject,
      userId: req.auth.userId,
      imageUrl: `${req.protocol}://${req.get("host")}/assets/images/${
        req.file.filename
      }`
    });
    accueil
      .save()
      .then(() => {
        res.status(201).json({ message: "Accueil enregistré !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };
// UPDATE
exports.update = (req, res, next) => {
  const accueilObject = req.file
  ? {
      ...req.body,
      imageUrl: `${req.protocol}://${req.get("host")}/../../assets/images/${
        req.file.filename
      }`,
    }
  : { ...req.body };

delete accueilObject._userId;
AccueilModel.findOne({ _id: req.params.id })
  .then((accueil) => {
      AccueilModel.updateOne(
        { _id: req.params.id },
        { ...accueilObject, _id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Accueil modifié!" }))
        .catch((error) => res.status(401).json({ error }));
    })
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
