const crypto = require('crypto');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    salt: String,
    firstAccess: Boolean,
    avatar: {
        type: String,
        default: 'noavatar.png'
    }
}, {
    timestamps: true,
});

const User = mongoose.connection.model('User', schema);

((async () => {

    const recordset = await User.find();

    if (!recordset.length) {
        const salt = crypto.randomBytes(16).toString('hex');
        const password = crypto.pbkdf2Sync('qwe123!@', salt, 1000, 64, 'sha1').toString('hex');

        await User.create({
            name: 'Rafael Ogrim',
            email: 'rafael.ogrim@gmail.com',
            access: 'adm',
            firstAccess: true,
            password,
            salt,
        });
    }

})());

module.exports = User;
