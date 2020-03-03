
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

module.exports = (mongoose.model('Contribution', ContributionSchema));
