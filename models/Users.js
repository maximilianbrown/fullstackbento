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
    authentication:{
        verified:{
            type: Boolean,
            default: false
        },
        level:{
            type: String,
            default:'basic'       
        }
    }
});

module.exports = User = mongoose.model('user', UserSchema);