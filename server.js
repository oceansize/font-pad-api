const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use('/api', router);

app.get('/', (req, res) => {
  res.sendfile('views/index.html')
})

app.get('/unicode-form', (req, res) => {
  res.sendfile('views/form.html')
})

app.get('/success', (req, res) => {
  res.sendfile('views/success.html')
})

require('./app/routes')(router);

app.listen(port, () => {
  console.log('much magic on port: ' + port);
});
