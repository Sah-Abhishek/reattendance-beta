const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhish:6YAt8eAogRGC5dhR@cluster0.jv7k7a6.mongodb.net/");

const todoSchema = new mongoose.Schema({
    first: { type: String, required: true },
    second: { type: String, required: true },
    third: { type: String, required: true },
    fourth: { type: String, required: true },
    fifth: { type: String, required: true },
    sixth: { type: String, required: true },
    seventh: { type: String, required: true },
    eighth: { type: String, required: true },
    completed: { type: Boolean, default: false }
});

const timetable = mongoose.model('Timetable', todoSchema);

module.exports = {
    timetable
};
