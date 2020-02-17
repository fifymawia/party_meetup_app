const Group = require('./model');
const { Meetup } = require('../meetups');

const createGroup = async (req, res) => {
  const {
    name,
    description,
    // category
  } = req.body;
  if (!name) {
    return res.status(400).json({ error: true, message: 'Name must be provided' });
  // eslint-disable-next-line brace-style
  }
  else if (typeof name !== 'string') {
    return res.status(400).json({ error: true, message: 'Name must be a String' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Name must be atleast 5 characters' });
  }
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
  const group = new Group({ name, description });
  try {
    return res.status(201).json({ error: false, group: await group.save() });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Error when Creating Group' });
  }
};

const createGroupMeetup = async (req, res) => {
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
    const { meetup, group } = await Group.addMeetup(groupId, { title, description });
    return res.status(201).json({ error: false, meetup, group });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Meetup cannot be created' });
  }
};

const getGroupMeetups = async (req, res) => {
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
      meetups: await Meetup.find({ group: groupId }).populate('group', 'name') });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Cannot fetch meetup' });
  }
};
module.exports = { createGroupMeetup, createGroup, getGroupMeetups };
// module.exports = { createGroup };
