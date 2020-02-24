// export * from './meetups';
const contributions = require('./contributions');

const groups = require('./groups');

module.exports = { ...contributions, ...groups };
