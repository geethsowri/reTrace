const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema( // this is the schema for the entry model. it defines the structure of the entry document in the database.
  {
    createdBy: {
      type: mongoose.Schema.type.ObjectId, // this is the id of the user who created the entry.
      required: true, // this means that the createdBy field is required.
      ref: "User", // this means that the createdBy field references the User model. so, it will store the id of the user who created the entry.
    },
    data: { type: Date, required: true }, // this is the date when the entry was created. it is required. enum is defined as a list of possible values.
    title: String,
    mood: {
      type: String,
      enum: ["🙂", "😔", "😡"],
    },
    content: String,
  },
  { timestamps: true }
);

const entryModel = mongoose.model("Entry", entrySchema); // this creates a model called "Entry" using the entrySchema. this model will be used to interact with the entries in the database.
mondule.exports = entryModel;


// if i had to explain this code to a 5 year old, i would say:
// this code is like a recipe for making a special kind of note called an "entry". so, it tells us what ingredients we need (like the title, mood, and content) and how to put them together.