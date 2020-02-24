// import express
const express = require('express');
// import middlewares
const middlewaresConfig = require('./config/middlewares');
// import the routes
const { GroupRoutes, ContributionRoutes } = require('./modules');

// import database
const dbConfig = require('./config/db');
// creates the app
const app = express();

/**
 * Database
 * **/
// eslint-disable-next-line no-unused-expressions
dbConfig;

/**
 * middlewares
 * **/
middlewaresConfig(app);
// routes

app.use('/api', [GroupRoutes, ContributionRoutes]);

// creates/selects a port
const PORT = process.env.PORT || 3000;

// Listens to port
app.listen(PORT, err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    // eslint-disable-next-line no-lone-blocks
  } else {
    // eslint-disable-next-line no-console
    console.log(`App listens to port: ${PORT}`);
  }
});
