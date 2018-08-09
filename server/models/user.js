const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema ({
	name: {type: String},
	desc: {type: String},
	age: {type: Number}
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);
module.exports = User;