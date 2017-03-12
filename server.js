const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

app.get('/', (req, res) => {
  res.sendfile('views/index.html')
})

require('./app/routes')(router, {});

app.listen(port, () => {
  console.log('much magic on port' + port);
});
