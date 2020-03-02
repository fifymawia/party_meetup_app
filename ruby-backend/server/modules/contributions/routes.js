const Router = require('express');
const ContributionController = require('./controller');

const routes = new Router();

// contribution by group
routes.post('/contributions', ContributionController.createGroupContribution);
routes.get('/contributions', ContributionController.getGroupContributions);

// routes.post('/contributions/:contributionId/members/new', ContributionController.createContributionMembers);
routes.get('/contribution/:contributionId/members', ContributionController.getContributionMembers);

module.exports = routes;
