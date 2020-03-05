const Router = require('express');
const GroupController = require('./controller');
const authCheck = require('../../utils/authCheck');

const routes = new Router();
// Post a group
routes.post('/groups', authCheck, GroupController.createGroup);
// get all groups
routes.get('/groups', GroupController.getAllgroups);
// get a single  group by id
routes.get('/groups/:groupId', GroupController.getAsingleGroup);
// get contributions in a group
routes.get('/groups/:groupId/contributions', GroupController.getGroupContributions);
// get all members in a group
routes.get('/groups/:groupId/members', GroupController.getGroupMembers);

module.exports = routes;
