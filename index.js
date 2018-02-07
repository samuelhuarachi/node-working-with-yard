// import http from 'http';
// import express from 'express';
// import bodyParser from 'body-parser';
// import consign from 'consign';


// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : false}))

// consign()
//     .include("routes")
// .into(app)

// app.listen(1337, () => {
//     console.log('Server running at http://127.0.0.1:1337/');
// })

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];

console.log("Command: ", command);
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognize')
}

