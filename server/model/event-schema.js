const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    venue: String,
    
})

module.exports = mongoose.model('Event', eventSchema);