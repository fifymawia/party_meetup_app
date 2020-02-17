const Router = require('express');
const GroupController = require('./controller');

const routes = new Router();

routes.post('/groups/new', GroupController.createGroup);
routes.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup);

module.exports = routes;
