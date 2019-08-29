const mongoose = require('../configs/mongoose');

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
