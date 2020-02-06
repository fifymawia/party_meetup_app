
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
  },
}, { timestamps: true }
);
module.exports = (mongoose.model('Meetup', MeetupSchema));
