const Router = require('express');
const ContributionController = require('./controller');

const routes = new Router();

routes.post('/contributions', ContributionController.createContribution);
routes.get('/contributions', ContributionController.getAllContributions);

module.exports = routes;
