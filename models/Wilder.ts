import { Schema } from "mongoose";

const mongoose = require("mongoose")
const WilderSchema: Schema = new Schema({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});
module.exports = mongoose.model("wilder", WilderSchema)
