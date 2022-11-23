const mongoose = require('mongoose');

const BioSchema = mongoose.Schema({
    //userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: false },
}, {timestamps: true});

module.exports = mongoose.model('Bio', BioSchema);
