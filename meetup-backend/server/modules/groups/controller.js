const Group = require('./model');

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
    const [meetup, group] = await Group.addMeetup(groupId, { title, description });
    return res.status(201).json({ error: false, meetup, group });
  } catch (e) {
    return res.status(400).json({ error: true, message: 'Meetup cannot be created' });
  }
};
module.exports = { createGroupMeetup, createGroup };
// module.exports = { createGroup };
