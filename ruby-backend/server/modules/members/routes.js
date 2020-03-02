const Router = require('express');
const MemberController = require('./controller');

const routes = new Router();

routes.post('/members', MemberController.createGroupMembers);
routes.get('/members', MemberController.getGroupMembers);
// routes.get('/groups/:groupId/members', GroupController.getGroupMembers);

module.exports = routes;
