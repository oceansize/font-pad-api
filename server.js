const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/db.js');

mongoose.connect(db.url);

const app = express();
const router = express.Router();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

router.get('/', (req, res) => {
  res.json({ message: 'yolos, api is alife!'})
})


app.listen(port, () => {
  console.log('much magic on port' + port);
});
