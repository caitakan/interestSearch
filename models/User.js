const mongoose = require('mongoose');
const Schema = mongoose.Schema // equal to const Schema = mongoose.Schema|| const {Schema} = mongoose;

const userSchema = new Schema({
    googleID: String,
    name: String,
    email: String
});

mongoose.model('users', userSchema);
