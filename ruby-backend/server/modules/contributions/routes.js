const Router = require('express');
const ContributionController = require('./controller');

const routes = new Router();
// creating and getting contributions
routes.post('/contributions', ContributionController.createContribution);
routes.get('/contributions', ContributionController.getAllContributions);
// members by contribution
// routes.post('/contributions/:contributionId/members/new', ContributionController.createContributionMembers);
// routes.get('/contribution/:contributionId/members', ContributionController.getContributionMembers);

module.exports = routes;
