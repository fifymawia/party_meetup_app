
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContributionSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, 'Title must be atleast 5 characters'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Description must be atleast 10 characters'],
  },
  members: {
    type: Array,
    required: true,
    minlength: [2, 'Members must be atleast 2'],
  },

  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
  // members: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Member',
  // }],
}, { timestamps: true }
);

// /** *
//  * create a financial contribution purpose and add it to the contribution array in the group */
// ContributionSchema.statics.addMember = async function (id, args) {
//   const Member = mongoose.model('Member');
//   // add group id to the contribution  group element
//   // the author of the contribution

//   const member = await new Member({ ...args, contribution: id });
//   // find group with the id provided in the url
//   // push the contribution id in the contributions element
//   const contribution = await this.findByIdAndUpdate(id, { $push: { members: member.id } });

//   // group.contributions.push(meetup);

//   // const result = await Promise.all([contribution.save(), group.save()]);
//   // return result;
//   return {
//     member: await member.save(),
//     contribution,
//   };
// };
module.exports = (mongoose.model('Contribution', ContributionSchema));
