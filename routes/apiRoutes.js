const router = require ('express').Router();
const save = require('../db/db.json');

//Get request for notes
router.get('/notes', (req, res) => { save
    .getNotes()
      .then((notes) => { return res.json(notes); })
      .catch((err => res.status(500).json(err)));
});

router.post('/notes', (req, res) => { save
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

//Delete notes
router.delete('/notes/:id', (req, res) => { save
    .removeNote(req.params.id)
      .then(() => res.json({ ok : true })
      .catch((err => res.status(500).json(err))
    ));
});

//Export the module
module.exports = router;