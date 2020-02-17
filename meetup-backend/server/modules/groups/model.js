const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'name should have a min of 5 characters'],

  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'description should have a min of 10 characters'],
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
module.exports = (mongoose.model('Group', GroupSchema));

