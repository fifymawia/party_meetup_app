const Router = require('express');
const GroupController = require('./controller');

const routes = new Router();
// Post a group
routes.post('/groups', GroupController.createGroup);
// get all groups
// routes.get('/groups', GroupController.getGroup);

module.exports = routes;
