const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be atleast 5 characters'],

  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be atleast 10 characters'],
  },
  bankAccount: {
    type: String,
    required: true,
    minLength: [12, 'Bank Account must be atleast 12 characters'],
  },
  category: {
    type: String,
  },
  contributions: [{
    type: Schema.Types.ObjectId,
    ref: 'Contribution',
  }],
}, { timestamps: true }
);
/** *
 * create a financial contribution purpose and add it to the contribution array in the group */
GroupSchema.statics.addContribution = async function (id, args) {
  const Contribution = mongoose.model('Contribution');
  // add group id to the contribution  group element
  // the author of the contribution

  const contribution = await new Contribution({ ...args, group: id });
  // find group with the id provided in the url
  // push the contribution id in the contributions element
  const group = await this.findByIdAndUpdate(id, { $push: { contributions: contribution.id } });

  // group.contributions.push(meetup);

  // const result = await Promise.all([contribution.save(), group.save()]);
  // return result;
  return {
    contribution: await contribution.save(),
    group,
  };
};
module.exports = (mongoose.model('Group', GroupSchema));

