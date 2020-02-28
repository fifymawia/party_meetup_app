const Group = require('./model');
const { Contribution } = require('../contributions');
const { Member } = require('../members');

const createGroup = async (req, res) => {
  const {
    name,
    description,
    bankAccount,
    frequency,
    amount,
    proposedDate,
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
  } else if (typeof bankAccount !== 'string') {
    return res.status(400).json({ error: true, message: 'Bank Account must be a String' });
  } else if (bankAccount.length < 12) {
    return res.status(400).json({
      error: true,
      message: 'Bank Account Number must be atleast 12 characters',
    });
  }
  // contribution frequency aunthentication
  if (!frequency) {
    return res.status(400).json({ error: true, message: 'frequency must be provided' });
  // eslint-disable-next-line brace-style
  }
  else if (typeof frequency !== 'string') {
    return res.status(400).json({ error: true, message: 'frequency must be a String' });
  } else if (frequency.length < 3) {
    return res.status(400).json({ error: true, message: 'frequency must be atleast 3 characters' });
  }
  // group amount entry
  if (!amount) {
    return res.status(400).json({ error: true, message: 'Amount must be provided' });
    // eslint-disable-next-line brace-style
  }
  else if (typeof amount !== 'string') {
    return res.status(400).json({ error: true, message: 'Amount must be a string' });
  } else if (amount.length < 1) {
    return res.status(400).json({ error: true, message: 'Amount must be atleast 1 characters' });
  }

  // proposed start date entry
  if (!proposedDate) {
    return res.status(400).json({ error: true, message: 'ProposedDate must be provided' });
  // eslint-disable-next-line brace-style
  }
  else if (typeof proposedDate !== 'string') {
    return res.status(400).json({ error: true, message: 'ProposedDate must be a String' });
  } else if (proposedDate.length < 5) {
    return res.status(400).json({ error: true, message: 'ProposedDate must be atleast 5 characters' });
  }

  const group = new Group({ name, description, bankAccount, frequency, amount, proposedDate });
  try {
    return res.status(201).json({ error: false, group: await group.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};
// add contribution array to group

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

// add members array to the group

const createGroupMembers = async (req, res) => {
  const { name,
    phoneNumber,
  } = req.body;
  const { groupId } = req.params;
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
  if (!groupId) {
    return res.status(400).json({ error: true, message: 'GroupId must be provided' });
  }
  // eslint-disable-next-line no-empty
  try {
    const { member, group } = await Group.addMember(groupId, { name, phoneNumber });
    return res.status(201).json({ error: false, member, group });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};

const getGroupMembers = async (req, res) => {
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
      members: await Member.find({ group: groupId }).populate('group', 'name') });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch contribution' });
  }
};

module.exports = { createGroupContribution, createGroupMembers, createGroup, getGroupContributions, getGroupMembers };
// module.exports = { createGroup };
