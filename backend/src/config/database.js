const mongoose = require("mongoose");
const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI);
};

mondule.exports = connectDB;

// this file is used to connect the db. 
// this will form the connection between the db and the server.
// this is the first step to develop the backend.