const Router = require('express');
const GroupController = require('./controller');

const routes = new Router();

routes.post('/groups/new', GroupController.createGroup);
routes.post('/groups/:groupId/contributions/new', GroupController.createGroupContribution);
routes.get('/groups/:groupId/contributions', GroupController.getGroupContributions);

module.exports = routes;
