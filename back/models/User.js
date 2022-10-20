const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  login: { type: String, required: true, unique: true },
  email: { type: String, required: false, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', userSchema);
