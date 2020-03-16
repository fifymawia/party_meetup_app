const Router = require('express');
const MemberController = require('./controller');
const authCheck = require('../../utils/authCheck');

const routes = new Router();

routes.post('/members', authCheck, MemberController.createGroupMembers);

// gets all members
routes.get('/members', MemberController.getAllMembers);
// routes.get('/groups/:groupId/members', GroupController.getGroupMembers);

// get a particular member by Id
routes.get('/members/:memberId', MemberController.getAmember);

module.exports = routes;
