const Contribution = require('./model');
const { Member } = require('../members');

const createContribution = async (req, res) => {
  const { title, description, member } = req.body;
  const newContribution = new Contribution({ title, description, member });

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

// members array in a contribution
const createContributionMembers = async (req, res) => {
  const { name,
    phoneNumber,
  } = req.body;
  const { contributionId } = req.params;
  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must be provided' });
  } else if (typeof name !== 'string') {
    return res.status(400).json({ error: true, message: 'Name must be a String' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Name must be atleast 5 characters' });
  }
  if (!phoneNumber) {
    return res.status(400).json({ error: true, message: 'PhoneNumber must be provided' });
  } else if (typeof phoneNumber !== 'string') {
    return res.status(400).json({ error: true, message: 'PhoneNumber must be a String' });
  } else if (phoneNumber.length < 10) {
    return res.status(400).json({ error: true, message: 'PhoneNumber must be atleast 10 characters' });
  }
  if (!contributionId) {
    return res.status(400).json({ error: true, message: 'ContributionId must be provided' });
  }
  // eslint-disable-next-line no-empty
  try {
    const { member, contribution } = await Contribution.addMember(contributionId, { name, phoneNumber });
    return res.status(201).json({ error: false, member, contribution });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Member cannot be created' });
  }
};

const getContributionMembers = async (req, res) => {
  const { contributionId } = req.params;
  if (!contributionId) {
    return res.status(400).json({ error: true, message: 'You need to provide the contribution id' });
  }
  // search to see if Contribution exists
  const contribution = await Contribution.findById(contributionId);
  if (!contribution) {
    return res.status(400).json({ error: true, message: 'This Contribution does not exist' });
  }
  // eslint-disable-next-line no-empty
  try {
    return res.status(200).json({
      error: false,
      members: await Member.find({ contribution: contributionId }).populate('contribution', 'name') });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch contribution' });
  }
};

module.exports = { getAllContributions,
  createContribution, 
  createContributionMembers, 
  getContributionMembers, 
};
