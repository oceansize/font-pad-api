'use strict';

const mongoose = require('mongoose');
const db = require('../../config/db.js');
mongoose.connect(db.url);

const Unicode = require('../schemas/unicode');

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
      let c = req.body;
      function allCells () {
        let content = []
        for(let i = 0; i < c.code.length; i += 6) {
          let cells = [{
            code: c.code[i],
            character: c.char[i],
            name: c.name[i],
          },{
            code: c.code[i+1],
            character: c.char[i+1],
            name: c.name[i+1],
          },{
            code: c.code[i+2],
            character: c.char[i+2],
            name: c.name[i+2],
          },{
            code: c.code[i+3],
            character: c.char[i+3],
            name: c.name[i+3],
          },{
            code: c.code[i+4],
            character: c.char[i+4],
            name: c.name[i+4],
          },{
            code: c.code[i+5],
            character: c.char[i+5],
            name: c.name[i+5],
          }]

          content.push({cells: cells})
        }

        for (let j = 0; j < c.rowTitle.length; j++) {
          Object.assign(content[j], {row: c.rowTitle[j]});
        }

        return content
      }

      const unicode = new Unicode ({
        language: c.language,
        url: c.url,
        column: c.columnTitle.map(obj => Object.assign({}, {name: obj})),
        content: allCells()
      });

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
