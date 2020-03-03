const Contribution = require('./model');
const Group = require('../groups/model');
// const { Member } = require('../members');

// add contribution array to group

const createGroupContribution = async (req, res) => {
  const { title,
    description,
    members,
    groupId,
  } = req.body;
  // const { groupId } = req.params;
  if (!title) {
    return res.status(400).json({ error: true, message: 'Title must be provided' });
  } else if (typeof title !== 'string') {
    return res.status(400).json({ error: true, message: 'Title must be a String' });
  } else if (title.length < 5) {
    return res.status(400).json({ error: true, message: 'Title must be atleast 5 characters' });
  }
  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must be a String' });
  } else if (description.length < 10) {
    return res.status(400).json({ error: true, message: 'Description must be atleast 10 characters' });
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
    const { contribution } = await Group.addContribution(groupId, { title, description, members });
    return res.status(201).json({ error: false, contribution });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};

// get all contributions
const getAllContributions = async (req, res) => {
  try {
    return res.status(200).json({ contributions: await Contribution.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error With Contributions' });
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
      ]) });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};

module.exports = {
  getAllContributions,
  createGroupContribution,
  getContributionMembers,
};
