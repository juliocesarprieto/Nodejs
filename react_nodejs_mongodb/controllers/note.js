const note = require('../models/note');

async function save(data) {

    // notes.push(note);
   return await note.save(data);
}