const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let unicodeSchema = new Schema({
  headers: [{ name: String }],
  title: String
})

module.exports = mongoose.model('Unicode', unicodeSchema)
