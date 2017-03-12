const mongoose = require('mongoose');
const db = require('../../config/db.js');
mongoose.connect(db.url);

const Unicode = require('../models/unicode');

module.exports = (router) => {
  router.use((req, res, next) => {
    console.log('summin\'s happenin...');
    next();
  })

  router.get('/', (req, res) => {
    res.json({ message: 'yolos, api is alife!'})
  })

  router.route('/unicodes')
    .post((req, res) => {
      const unicode = new Unicode();
      // unicode.headers[0].name = req.body.name1;
      unicode.title = req.body.title;
      unicode.save((err) => {
        if (err) { res.send(err) };
        res.json({ message: 'Unicode created!'})
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
      Unicode.findById(req.params.id, (err, unicode) => {
        if (err) { res.send(err) };
        res.json(unicode);
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
