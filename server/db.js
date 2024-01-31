const mongoose = require('mongoose');
const mongoConnection = () =>{
    mongoose.connect('mongodb://localhost:27017/portfolio');
}

module.exports = mongoConnection