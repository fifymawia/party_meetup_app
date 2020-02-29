const bodyParser = require('body-parser');
const morgan = require('morgan');
// const jwt = require('jsonwebtoken');

// const cors = require('cors');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));
  // app.use(cors());
};

