const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const { MongoClient } = require("mongodb");

mongoose.connect('mongodb://localhost:8000/loginreg');
mongoose.connection.on('connected', ()=> console.log('we are connected to mongodb'));

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "First name cannot be blank!"],
    
    },
    last_name: {
        type: String,
        required: [true, "Last name cannot be blank!"],

    },
    email: {
        type: String,
        unique: [true, "Email is taken!"],
        required: [true, "Email is required!"],
   
    },
    password: {
        type: String,
        required: [true, "Password cannot be blank!"],
        minLength: [6, "Password must be at least six characters!"],
       
    },
    birthday: {
        type: Date,
        required: [true, "Birthday is required!"]
    },
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema);
