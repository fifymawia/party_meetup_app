const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/RubyApp';

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})
  // eslint-disable-next-line no-console
  .then(() => { console.log('Mongodb running'); })
  // eslint-disable-next-line no-console
  .catch(err => console.error(err)
  );
