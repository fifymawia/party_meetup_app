const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/RubyApp', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})
  // eslint-disable-next-line no-console
  .then(() => { console.log('Mongodb running'); })
  // eslint-disable-next-line no-console
  .catch(err => console.error(err)
  );
