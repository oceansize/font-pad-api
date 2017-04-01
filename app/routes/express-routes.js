'use strict';

const generateDocument = require('../schema-helpers/create');
const Unicode = require('../schemas/unicode');
const mongoose = require('mongoose');
const db = require('../../config/db.js');
mongoose.connect(db.url);


module.exports = (router) => {
  router.use((req, res, next) => {
    console.log('summin\'s happenin...');
    next();
  })

  router.route('/')
    .post((req, res) => {
      console.log(req.body);
        let unicode = new Unicode (generateDocument(req.body));
        unicode.save((err) => {
        if (err) { res.send(err) };
        res.redirect('/success');
      });
    })

    .get((req, res) => {
      Unicode.find((err, unicodes) => {
        if (err) { res.send(err) };
        res.json(unicodes);
      })
    })

  router.route('/:id')
    .get((req, res) => {
      Unicode.findOne({ language: req.params.id.toLowerCase() }, (err, language) => {
        if (err) { res.send(err) };
        res.json(language);
      })
    })

    .put((req, res) => {
      Unicode.findOne(req.params.id, (err, unicode) => {
        if (err) { res.send(err) };
        unicode.title = req.body.title;
        unicode.save((err) => {
          if (err) { res.send(err) };
          res.json({ message: 'Unicode updated!'})
        })
      })
    })

    .delete((req, res) => {
      Unicode.remove({ language: req.params.id.toLowerCase() }, (err, language) => {
        if (err) { res.send(err) };
        res.json({ message: 'Unicode deleted!'});
      })
    })
}
