const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = Schema({
  username: String,
  email:    String,
  imgPath: String,
  imgName: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
