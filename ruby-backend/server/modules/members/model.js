
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
module.exports = (mongoose.model('Member', MemberSchema));
