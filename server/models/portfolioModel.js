const mongoose = require('mongoose');
const { Schema } = mongoose;

const portfolioSchema = new Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
  education: {type:String, required:true},
  filepath: {type:String, required:true},
  tag: {type:String, required:true},
  date: {type:Date, default: Date.now}
});

const portfolios = mongoose.model('portfolios',portfolioSchema)
module.exports = portfolios