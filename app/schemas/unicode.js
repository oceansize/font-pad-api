'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let unicodeSchema = new Schema({
  language: String,
  url: String,
  column: [ { name: String } ],
  content: [
    {
      row: Number,
      cells: [
        {
          code: String,
          character: String,
          name: String,
          available: Boolean
        }
      ]
    }
  ]
})

module.exports = mongoose.model('Unicode', unicodeSchema)
