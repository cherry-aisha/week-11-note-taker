const path = require('path');
const router = require ('express').Router();

//Linking notes to the notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});
//Directing other routes to index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Export the module
module.exports = router;