const Group = require('./model');
const { Contribution } = require('../contributions');

const createGroup = async (req, res) => {
  const {
    name,
    description,
    bankAccount,
    cyclePeriod,
    amount,
    proposedDate
    // category
  } = req.body;
  // name authentication
  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must be provided' });
  // eslint-disable-next-line brace-style
  }
  else if (typeof name !== 'string') {
    return res.status(400).json({ error: true, message: 'Name must be a String' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Name must be atleast 5 characters' });
  }
  // description authentication
  if (!description) {
    return res.status(400).json({ error: true, message: 'Description must be provided' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Description must be a String' });
  } else if (description.length < 10) {
    return res.status(400).json({
      error: true,
      message: 'Description must be atleast 10 characters',
    });
  }
  // bank account authentication
  if (!bankAccount) {
    return res.status(400).json({ error: true, message: 'Bank Account must be provided' });
  } else if (typeof description !== 'string') {
    return res.status(400).json({ error: true, message: 'Bank Account must be a String' });
  } else if (description.length < 12) {
    return res.status(400).json({
      error: true,
      message: 'Bank Account Number must be atleast 12 characters',
    });
  }
  const group = new Group({ name, description, bankAccount });
  try {
    return res.status(201).json({ error: false, group: await group.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error when Creating Group' });
  }
};

const createGroupContribution = async (req, res) => {
  const { title,
    description,
  } = req.body;
  const { groupId } = req.params;
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
  if (!groupId) {
    return res.status(400).json({ error: true, message: 'GroupId must be provided' });
  }
  // eslint-disable-next-line no-empty
  try {
    const { contribution, group } = await Group.addContribution(groupId, { title, description });
    return res.status(201).json({ error: false, contribution, group });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Contribution cannot be created' });
  }
};

const getGroupContributions = async (req, res) => {
  const { groupId } = req.params;
  if (!groupId) {
    return res.status(400).json({ error: true, message: 'You need to provide the group id' });
  }
  // search to see if group exists
  const group = await Group.findById(groupId);
  if (!group) {
    return res.status(400).json({ error: true, message: 'This group does not exist' });
  }
  // eslint-disable-next-line no-empty
  try {
    return res.status(200).json({
      error: false,
      contributions: await Contribution.find({ group: groupId }).populate('group', 'name') });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch contribution' });
  }
};
module.exports = { createGroupContribution, createGroup, getGroupContributions };
// module.exports = { createGroup };
