const Group = require('./model');
const { Member } = require('../members');
// const { Group } = require('../groups');

// add members array to the group

const createGroupMembers = async (req, res) => {
  const { name,
    phoneNumber,
    groupId,
  } = req.body;
  // const { groupId } = req.params;
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
    const { member } = await Group.addMember(groupId, { name, phoneNumber });
    return res.status(201).json({ error: false, member });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }
};
// get group Members

const getGroupMembers = async (req, res) => {
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
      members: await Member.find({ group: groupId }).populate('group', 'name') });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch members' });
  }
};

module.exports = { createGroupMembers, getGroupMembers };
