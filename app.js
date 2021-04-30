
const profile = require('./profile.js');

// const users = ["chalkers", "alenaholligan", "davemcfarland"];

const users = process.argv.slice(2);

users.forEach(profile.get);

