const passport = require('passport');
const User = require('../model/User')


// Load GoogleStrategy and LocalStrategy configurations
require('./googleStrategy')(passport);
require('./localLoginStrategy')(passport);
require('./localSignUpStrategy')(passport);
// require('./localPassResetStrategy')(passport);

module.exports = function (passport) {
    // Serialize and deserialize user to support persistent sessions (optional but recommended)
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
  
    passport.deserializeUser((id, done) => {
        // Fetch user from the database based on id (if needed) and call done with the user object
        User.findById(id, (err, user) => done(err, user))
    });
}