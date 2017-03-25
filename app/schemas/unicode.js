'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// let columnTitle = new Schema ({ name: String });
// let rowTitle = new Schema ({ row: Number});
// let cellData = new Schema ();

let unicodeSchema = new Schema({
  language: String,
  url: String,
  column: [],
  content: []
})


module.exports = mongoose.model('Unicode', unicodeSchema)
