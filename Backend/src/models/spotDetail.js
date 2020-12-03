const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const spotDetailSchema = new Schema({
  spotName: { type: String },
  spotImage: [String],
  spotDescription: { type: String },
  spotStyle: { type: String },
  spotBestVideo: { type: String },
  spotRating: [Number],
  spotLocation: { type: String },
});
module.exports = model('spot', spotDetailSchema);
