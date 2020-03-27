const Router = require('express');
const ContributionController = require('./controller');

const routes = new Router();

// contribution by group
routes.post('/contributions', ContributionController.createGroupContribution);
routes.get('/contributions', ContributionController.getAllContributions);

// routes.post('/contributions/:contributionId/members/new', ContributionController.createContributionMembers);
// get members of a contribution
routes.get('/contributions/:contributionId/members', ContributionController.getContributionMembers);
// get a single contribution by id  >>>>>GET v1/api/contributions/:id => Get a single group
routes.get('/contributions/:contributionId', ContributionController.getAsingleContribution);

module.exports = routes;
