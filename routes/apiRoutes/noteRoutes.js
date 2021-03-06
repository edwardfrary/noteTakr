const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../Develop/public/db/db.json');

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;