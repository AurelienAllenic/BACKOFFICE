const mongoose = require('mongoose');

const AccueilSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: false },
});

module.exports = mongoose.model('Accueil', AccueilSchema);
