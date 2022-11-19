const mongoose = require('mongoose');

const PortfolioSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    illustration: { type: String, required: false },
    userId: { type: String, required: true },
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
