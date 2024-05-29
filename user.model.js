const mongoose = require('mongoose')

const Users = mongoose.model('User', {
    email: { type: String, require: true, minlength: 5 },
    password: { type: String, require: true },
    salt: { type: String, require: true },
})

module.exports = Users