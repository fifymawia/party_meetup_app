
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MemberSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [5, 'Name must be atleast 5 characters'],
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: [10, 'Phone Number must be atleast 10 characters'],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
  contribution: [{
    type: Schema.Types.ObjectId,
    ref: 'Contribution',
  }],
}, { timestamps: true }
);
/** *
 * create a members array in the group */
MemberSchema.statics.addMember = async function (id, args) {
  const Member = mongoose.model('Member');
  const Group = mongoose.model('Group');
  // const Contribution = mongoose.model('Contribution');

  // add group id to the  member element

  const member = new Member({ ...args, group: id });
  // find group with the id provided in the url
  // push the member id in the contributions element
  const group = await Group.findByIdAndUpdate(id, { $push: { members: member._id } });
  // const contribution = await Contribution.findByIdAndUpdate(id, { $push: { members: member._id } });
  // group.contributions.push(meetup);

  // const result = await Promise.all([contribution.save(), group.save()]);
  // return result;
  return {
    member: await member.save(),
    group: await group.save(),
    // contribution: await contribution.save(),
  };
};
module.exports = (mongoose.model('Member', MemberSchema));
