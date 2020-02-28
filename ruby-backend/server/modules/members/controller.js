const Member = require('./model');

const createMember = async (req, res) => {
  const { name, phoneNumber } = req.body;
  const newMember = new Member({ name, phoneNumber });

  try {
    return res.status(201).json({ member: await newMember.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: e.message });
  }
};

const getAllMembers = async (req, res) => {
  try {
    return res.status(200).json({ contribution: await Member.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error With Member' });
  }
};

module.exports = { createMember, getAllMembers };
