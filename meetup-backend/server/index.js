//import express
const express = require("express");
//import database
const dbConfig = require ('./config/db');
//import middlewares
const middlewaresConfig = require ('./config/middlewares');
//import the routes
const  MeetupRoutes = require('./modules/meetups/routes');
 //creates the app
const app = express();

/**
 * Database
 * **/
dbConfig;

/**
 * middlewares
 * **/
middlewaresConfig(app);
//routes
app.use('/api', [MeetupRoutes]);


//creates/selects a port
const PORT = process.env.PORT || 3000; 

//Listens to port
app.listen(PORT, err => {
    if (err) {
        console.error(err);
    }{
        console.log(`App listens to port: ${PORT}`);
    }
});