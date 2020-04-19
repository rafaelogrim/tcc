const mongoose = require('mongoose');
const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local').Strategy;
const crypto = require('crypto');
const User = require('../model/User');

const login = (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) return next(err);
        if (!user) return next({message: 'Usuário ou senha inválido'});
        req.logIn(user, (err2) => {
            if (err2) return next(err2);
            const {_id, email, access, name, firstAccess, avatar} = user;
            return res.finish({_id, email, access, name, firstAccess, avatar: `/static/avatar/${avatar}`});
        });
    })(req, res, next);
};

const logout = (req, res) => {
    req.logout();
    // res.clearCookie('browser__pcm__5__api');
    req.session.destroy();
    res.finish();
};

const isAuthenticated = (req, res, next) => req.isAuthenticated() ? next() : res.status(401).end();

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const user = await User.findOne({email});
        if (!user) return done(null, false);
        const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha1').toString('hex');
        if (user.password !== hash) return done(null, false);
        done(null, user);
    } catch (e) {
        done(e, null);
    }
}));

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findOne({_id: id}).select({password: 0, salt: 0, __v: 0});
        /*const paths = await Access.find({userType: user.access}).select({
            path: 1,
            label: 1,
            icon: 1,
            hide: 1,
            _id: 0
        });*/
        const avatar = `/static/avatar/${user.avatar}`;
        done(null, {...user.toObject(), avatar/*, paths*/});
    } catch (e) {
        done(e, null);
    }
});

module.exports = {
    login,
    logout,
    isAuthenticated,
};
