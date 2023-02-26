const note = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
note.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
note.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newFeedback = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(newNote);
  } else {
    res.json('Error in posting note');
  }
});

module.exports = note;


















/*
const router = require ('express').Router();
const save = require('../db/db.json');
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require ('../helpers/fsUtils');

//Get request for notes

// Add code which opens uo the file and writes it into the array,
// exercises at the back end of the week. Append, read, write...
// 24 feedback.js example fsUtils examples.
router.get('/notes', (req, res) => { save ()
      .then((notes) => { return res.json(notes); })
      .catch((err => res.status(500).json(err)));
      readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
      .then((json) => {
        const result = json.filter((note) => note.note_title === note);
        return result.length > 0
          ? res.json(result)
          : res.json('No note');
      });
});

router.post('/notes', (req, res) => { save
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

//Delete notes
router.delete('/notes/:id', (req, res) => { save
    .removeNote(req.params.id)
      .then(() => res.json({ ok : true })
      .catch((err => res.status(500).json(err))
    ));
});

//Export the module
module.exports = router;*/