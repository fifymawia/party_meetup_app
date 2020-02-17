const Router = require('express');
const MeetupController = require('./controller');

const routes = new Router();

routes.post('/meetups', MeetupController.createMeetup);
routes.get('/meetups', MeetupController.getAllMeetups);

module.exports = routes;
