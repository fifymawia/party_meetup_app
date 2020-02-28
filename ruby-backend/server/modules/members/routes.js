const Router = require('express');
const MemberController = require('./controller');

const routes = new Router();

routes.post('/members', MemberController.createMember);
routes.get('/members', MemberController.getAllMembers);

module.exports = routes;
