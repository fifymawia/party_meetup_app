const Router = require('express');
const MemberController = require('./controller');

const routes = new Router();

routes.post('/members', MemberController.createGroupMembers);
// gets all members
routes.get('/members', MemberController.getAllMembers);
// routes.get('/groups/:groupId/members', GroupController.getGroupMembers);

module.exports = routes;
