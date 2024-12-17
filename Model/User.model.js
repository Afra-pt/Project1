const mongoose = require('mongoose');






const schema = new mongoose.Schema({
    
    name: String,
    email: String,
    mobile: String,
    gender: String,
    password: String,
    userPic: String,
})

const userSchema = mongoose.model('user', schema)
module.exports = userSchema;