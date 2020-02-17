const Router = require('express');
const GroupController = require('./controller');

const routes = new Router();

routes.post('/groups/new', GroupController.createGroup);

module.exports = routes;
