const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: String,
    email: String,
    name: {
      first: String,
      last: String,
    },
    phone: Number,
    links: {
      github: String,
      behance: String,
      linkedin: String,
    },
    localization: {
      cep: Number,
      city: String,
      state: String,
      district: String,
      address: String,
      number: Number,
      complement: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
