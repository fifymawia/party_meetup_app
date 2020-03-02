const Group = require('./model');
// const { Contribution } = require('../contributions');
const { User } = require('../users');

const createGroup = async (req, res) => {
  const {
    name,
    description,
    bankAccount,
    frequency,
    amount,
    proposedDate,
    userId,
    // category
  } = req.body;
  // const { userId } = req.params;
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
  if (!userId) {
    return res.status(400).json({ error: true, message: 'User Id must be provided' });
  }

  try {
    // Check if Admin Exists as a user
    const admin = await User.findById(userId);
    if (!admin) {
      return res.status(400).json({ error: true, message: 'Admin does not exist as a user' });
    }
    // Create Group

    const group = await User.addGroup({ name, description, bankAccount, frequency, amount, proposedDate, admin: userId });
    // console.log(group, admin);

    // Add Admin to the Group
    const result = await Group.addMember(group._id, {
      name: `${admin.firstName} ${admin.lastName}`,
      phoneNumber: admin.phoneNumber,
      userId: admin._id,
    });
    return res.status(201).json({ error: false, result });
  } catch (e) {
    return res.status(400).json({ error: true, message: e.message });
  }

  // eslint-disable-next-line no-empty
  // user must be in our db
};

// get all groups

module.exports = { createGroup };
// module.exports = { createGroup };
