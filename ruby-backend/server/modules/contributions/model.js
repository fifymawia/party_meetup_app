
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContributionSchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [2, 'Title must be atleast 2 characters'],
  },
  amount: {
    type: String,
    required: true,
    minlength: [1, 'Amount must be atleast 1 character'],
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
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
