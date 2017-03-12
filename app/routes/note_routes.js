let ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
  app.get('/notes/:id', (req, res) => {
    const details = { '_id': new ObjectID(req.params.id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({ 'error': err });
      } else {
        res.send(item);
      }
    })
  });

  app.delete('/notes/:id', (req, res) => {
    const details = { '_id': new ObjectID(req.params.id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': err });
      } else {
        res.send(`Object ${req.params.id} deleted!`);
      }
    });
  });
//needs conditional logic in order to avoid bullifying fields that do not get updated
  app.put('/notes/:id', (req, res) => {
    const details = { '_id': new ObjectID(req.params.id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({ 'error': err })
      } else {
        res.send(note);
      }
    });
  });

  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': err })
      } else {
        res.send(result.ops[0]);
      }
    })
  });
};
