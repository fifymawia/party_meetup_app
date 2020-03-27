const Contribution = require('./model');
const Group = require('../groups/model');
// const { Member } = require('../members');

// add contribution array to group

const createGroupContribution = async (req, res) => {
  const {
    title,
    amount,
    members,
    groupId,
  } = req.body;
  // // const { groupId } = req.params;
  if (!title) {
    return res.status(400).json({ error: true, message: 'Title must be provided' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: true, message: 'Title must be a String' });
  } else if (title.length < 2) {
    return res.status(400).json({ error: true, message: 'Title must be atleast 2 characters' });
  }
  if (!amount) {
    return res.status(400).json({ error: true, message: 'Amount must be provided' });
  } else if (typeof amount !== 'number') {
    return res.status(400).json({ error: true, message: 'Amount must be a number' });
  } else if (amount.length < 1) {
    return res.status(400).json({ error: true, message: 'Amount must be atleast 1 character' });
  }
  if (!members) {
    return res.status(400).json({ error: true, message: 'Members must be provided' });
  } else if (typeof members !== 'object') {
    return res.status(400).json({ error: true, message: 'Members must be an array' });
  } else if (members.length < 2) {
    return res.status(400).json({ error: true, message: 'Members must be at least 2' });
  }
  if (!groupId) {
    return res.status(400).json({ error: true, message: 'GroupId must be provided' });
  }
  // eslint-disable-next-line no-empty
  const { members: groupMembers } = await Group.findById(groupId);
  const conMembers = members.filter(member => !groupMembers.includes(member));

  if (conMembers.length > 0) {
    return res.status(400).json({ error: true, message: 'There are con members', conMembers });
  }

  try {
    const { contribution } = await Group.addContribution(groupId, {
      title,
      amount,
      members,
    });
    return res.status(201).json({ error: false, contribution });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};

// get all Contributions
const getAllContributions = async (req, res) => {
  try {
    return res.status(200).json({ contributions: await Contribution.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error With Contributions' });
  }
};
// get a single contribution
const getAsingleContribution = async (req, res) => {
  const { contributionId } = req.params;
  if (!contributionId) {
    return res.status(400).json({ error: true, message: 'You need to provide the contribution id' });
  }
  // search to see if group exists
  const contribution = await Contribution.findById(contributionId);
  if (!contribution) {
    return res.status(400).json({ error: true, message: 'This contribution does not exist' });
  }
  // eslint-disable-next-line no-empty
  try {
    return res.status(200).json({
      error: false,

      contribution: await Contribution.findById(contributionId).populate([
        { path: 'contributions' },
      ]) });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
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
      members: await Contribution.findById(contributionId).populate([
        { path: 'members', model: 'Member' },
      ]),
    });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};

module.exports = {
  getAllContributions,
  getAsingleContribution,
  createGroupContribution,
  getContributionMembers,
};
