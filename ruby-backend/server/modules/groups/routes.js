const Router = require('express');
const GroupController = require('./controller');

const routes = new Router();
// group
routes.post('/groups/new', GroupController.createGroup);
// contribution by group
routes.post('/groups/:groupId/contributions/new', GroupController.createGroupContribution);
routes.get('/groups/:groupId/contributions', GroupController.getGroupContributions);
// members by group
routes.post('/groups/:groupId/members/new', GroupController.createGroupMembers);
routes.get('/groups/:groupId/members', GroupController.getGroupMembers);

module.exports = routes;
