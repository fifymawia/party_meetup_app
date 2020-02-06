

const mongoose = require("mongoose");

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/meetupME', { useUnifiedTopology: true,  useNewUrlParser: true })
    .then( function () {console.log('Mongodb running')})
    .catch(err => console.error (err)
    )


    
