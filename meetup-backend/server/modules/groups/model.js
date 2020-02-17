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
  category: {
    type: String,
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup',
  }],
}, { timestamps: true }
);
/** *
 * create a financial meetup/contribution purpose and add it to the meetup array in the group */
GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');
  // add group id to the meetup  group element
  // the author of the meetup

  const meetup = await new Meetup({ ...args, group: id });
  // find group with the id provided in the url
  // push the meetup id in the meetups element
  const group = await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });

  // group.meetups.push(meetup);

  // const result = await Promise.all([meetup.save(), group.save()]);
  // return result;
  return {
    meetup: await meetup.save(),
    group,
  };
};
module.exports = (mongoose.model('Group', GroupSchema));

