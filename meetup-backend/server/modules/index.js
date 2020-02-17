// export * from './meetups';
const meetups = require('./meetups');

const groups = require('./groups');

module.exports = { ...meetups, ...groups };
