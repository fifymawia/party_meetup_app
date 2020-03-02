const Contribution = require('./model');
const Group = require('../groups/model');
const { Member } = require('../members');

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

const getGroupContributions = async (req, res) => {
  const { groupId } = req.body;
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

// const createContribution = async (req, res) => {
//   // const { title, description, members } = req.body;
//   const { groupId } = req.params;

//   const group = Group.findById(groupId);
//   console.log(group);

//   // const newContribution = new Contribution({ title, description, members });

//   try {
//     // return res.status(201).json({ contribution: await newContribution.save() });
//     return res.status(201).json({ msg: 'Yeah' });
//   } catch (e) {
//     return res.status(e.status).json({ error: true, message: 'Error With Contribution' });
//   }
// };

const getAllContributions = async (req, res) => {
  try {
    return res.status(200).json({ contribution: await Contribution.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error With Contribution' });
  }
};

// // members array in a contribution
// const createContributionMembers = async (req, res) => {
//   const { name,
//     phoneNumber,
//   } = req.body;
//   const { contributionId } = req.params;
//   if (!name) {
//     return res.status(400).json({ error: true, message: 'Name must be provided' });
//   } else if (typeof name !== 'string') {
//     return res.status(400).json({ error: true, message: 'Name must be a String' });
//   } else if (name.length < 5) {
//     return res.status(400).json({ error: true, message: 'Name must be atleast 5 characters' });
//   }
//   if (!phoneNumber) {
//     return res.status(400).json({ error: true, message: 'PhoneNumber must be provided' });
//   } else if (typeof phoneNumber !== 'string') {
//     return res.status(400).json({ error: true, message: 'PhoneNumber must be a String' });
//   } else if (phoneNumber.length < 10) {
//     return res.status(400).json({ error: true, message: 'PhoneNumber must be atleast 10 characters' });
//   }
//   if (!contributionId) {
//     return res.status(400).json({ error: true, message: 'ContributionId must be provided' });
//   }
//   // eslint-disable-next-line no-empty
//   try {
//     const { member, contribution } = await Contribution.addMember(contributionId, { name, phoneNumber });
//     return res.status(201).json({ error: false, member, contribution });
//   } catch (e) {
//     return res.status(400).json({ error: true, message: 'Member cannot be created' });
//   }
// };

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
  getGroupContributions,
  createGroupContribution,
  getContributionMembers,
};
