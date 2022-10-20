const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    isPublic: { type: Boolean, required: true },
    illustration: { type: String, required: false },
    userId: { type: String, required: true },
});

module.exports = mongoose.model('Note', noteSchema);
