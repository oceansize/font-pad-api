const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let unicodeSchema = new Schema({
  name: String
})

module.exports = mongoose.model('Unicode', unicodeSchema)
