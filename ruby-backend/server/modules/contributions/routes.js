const Router = require('express');
const ContributionController = require('./controller');

const routes = new Router();

// contribution by group 
routes.post('/contributions', ContributionController.createGroupContribution);
routes.get('/contributions', ContributionController.getAllContributions);

// routes.post('/contributions/:contributionId/members/new', ContributionController.createContributionMembers);
routes.get('/contributions/:contributionId/members', ContributionController.getContributionMembers);

module.exports = routes;
