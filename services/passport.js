const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
        (accessToken, refreshToken, profile, done) => {
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);
            console.log('profile', profile);
            console.log('done:', done);

            User.findOne({ googleID: profile.id })
                .then((existingUser) => {
                    if (!existingUser) {
                        new User({
                            googleID: profile.id,
                            name: profile.displayName,
                            email: profile.emails[0].value
                        })
                            .save()
                            .then((user) => { done(null, user); });
                    } else {
                        console.log('this user is existing!', existingUser);
                        done(null, existingUser);
                    }
                })
        }
    )
);
