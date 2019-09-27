const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    access:{
        type: String,
        default:'user'       
    }
});

module.exports = User = mongoose.model('user', UserSchema);