const Contribution = require('./model');

const createContribution = async (req, res) => {
  const { title, description } = req.body;
  const newContribution = new Contribution({ title, description });

  try {
    return res.status(201).json({ contribution: await newContribution.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error With Contribution' });
  }
};

const getAllContributions = async (req, res) => {
  try {
    return res.status(200).json({ contribution: await Contribution.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error With Contribution' });
  }
};

module.exports = { getAllContributions, createContribution };
