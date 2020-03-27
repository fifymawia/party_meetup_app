// user schema

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, 'First Name must be atleast 3 characters'],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, 'Last Name must be atleast 3 characters'],
  },
  email: {

    type: String,

  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    minlength: [10, 'Phone Number must be atleast 10 characters'],
  },
  // active: {
  //   type: Boolean,
  //   required: true,
  //   default: false,
  // },
  login: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be atleast 6 characters'],
  } },
{ timestamps: true,
});
// creating group
UserSchema.statics.addGroup = async function (args) {
  const Group = mongoose.model('Group');
  return Group.create(args);
};

// export model user with UserSchema
module.exports = mongoose.model('user', UserSchema);
