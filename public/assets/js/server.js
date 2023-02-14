//Initiate express
const { application } = require('express');
const express = require ('express');
//Initiate path library
const path = require('path');
//Selecting port
const app = express();
const PORT = 3001;
//Require JSON file and assign to notes data
const notesData = require('../../notes.json');

//Serve from statically public folder.
app.use(express.static('public'));

// Return JSON to display notes
app.get('/', (req, res) => res.json(application.json));

//Setting up routes
app.get('/', (req,res) => res.send('Navigate to ./index or ./notes'));

//Homepage route
app.get('/index', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Notes page Route
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
console.log(`Notes app listening at http://localhost:${PORT}`)
);