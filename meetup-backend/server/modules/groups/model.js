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
GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');
  
  const group = await this.findById(id);

  const meetup = await new Meetup({ ...args, group });

  group.meetups.push(meetup);

  const result = await Promise.all([meetup.save(), group.save()]);
  return result;
};
module.exports = (mongoose.model('Group', GroupSchema));

