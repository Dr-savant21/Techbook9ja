const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/User')
const sendEmail = require('./sendEmails');
const generateRandomString = require('../utils/generateSecret');
const Token = require('../model/token');


module.exports = function (passport) {
  passport.use("local-signup",
    new LocalStrategy(
        {
          usernameField: 'email',
          passwordField: 'password',
          passReqToCallback : true


        },
        async (req, email, password, done) => {
            try {
                let user = await User.findOne({ email })
                if (user) {
                    done(null, false, req.flash('signupMessage', 'Email Already Taken!'));
                } else {
                    user = new User({ email, password, displayName: req.body.displayName });
                    await user.save();
                    let token = await Token.findOne({ userId: user._id });
                    if (token) {
                        await token.deleteOne()
                    } else {
                        // Generate a password reset token
                        token = generateRandomString(64);
                        await new Token({
                            userId: user._id,
                            token,
                        }).save();
                    }
                
                    // Send the password reset email
                    const link = `${process.env.LINK}/confirm-mail?token=${token}&user=${user._id}`;
                    sendEmail(user.email, "Mail Confirmation", { name: user.displayName, link }, "../views/confMail.hbs");
                    done(null, user);
                }
            } catch (error) {
                if (error.name === 'ValidationError') {
                    const errors = Object.values(error.errors).map((err) => err.message);
                    done(null, false, req.flash('signupMessage', errors ));
                } else {
                    console.log(error)
                    done(null, false, req.flash('signupMessage', error));
                }
            }
        }
    )
  )
}