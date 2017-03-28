'use strict';

const denerateDocument = require('../schema-helpers/create');
const Unicode = require('../schemas/unicode');
const mongoose = require('mongoose');
const db = require('../../config/db.js');
mongoose.connect(db.url);


module.exports = (router) => {
  router.use((req, res, next) => {
    console.log('summin\'s happenin...');
    next();
  })

  router.route('/unicodes')
    .post((req, res) => {
        let unicode = new Unicode (denerateDocument(req.body));
        console.log(unicode);
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

  router.route('/unicodes/:id')
    .get((req, res) => {
      Unicode.findOne({ language: req.params.id.toLowerCase() }, (err, language) => {
        if (err) { res.send(err) };
        res.json(language);
      })

    })

    .put((req, res) => {
      Unicode.findById(req.params.id, (err, unicode) => {
        if (err) { res.send(err) };
        unicode.title = req.body.title;
        unicode.save((err) => {
          if (err) { res.send(err) };
          res.json({ message: 'Unicode updated!'})
        })
      })
    })

    .delete((req, res) => {
      Unicode.remove({
        _id: req.params.id
      }, (err, bear) => {
        if (err) { res.send(err) };
        res.json({ message: 'Unicode deleted!'});
      })
    })
}
