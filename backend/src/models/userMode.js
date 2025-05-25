const mongoose = require('mongoose');
const { use } = require('react');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // ensures that no two users can have the same email
    },
    firstName: {
        type: String,
        required: true,
    }, 
    lastName: {
        type: String,
    }, 
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema); // creates a model called "User" using the userSchema. this model will be used to interact with the users in the database.
mondule.exports = User;