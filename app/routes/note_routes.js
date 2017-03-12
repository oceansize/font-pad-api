module.exports = (app, db) => {
  app.post('/notes', (req, res) => {
    console.log(req.body);
    res.send('yolo')
  });
};
