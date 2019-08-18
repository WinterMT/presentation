#!/usr/bin/env node

// Bash script to output references from a .bib file to APA (or other format)
// Winter Maxwell Thayer
// 2019-08-17

// require the citation and fs [filestream] [modules?]
const Cite = require('citation-js');
const fs = require('fs');

// if there is only one argument from the terminal, do this
if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}

// set a path variable to the second argument from the terminal to feed
// to below functions
var path = process.argv[2];

// look for a references.bib file to read - add try-catch!
let myBib = fs.readFileSync(path + "/references.bib", "utf8");

// instantiate a Cite class then format it using the citation-js package
let thisBibliography = new Cite(myBib);
let output = thisBibliography.format('bibliography', {
  format: 'html',
  template: 'apa',
  lang: 'en-US'
});

// write the bibliography to an html file
fs.writeFile(path + 'references.html', output, function (err) {
  if (err) throw err;
  console.log('Consider those references APAed'); // done and done :-)
});

// read the filenames that are in the directory
fs.readdir(path, function(err, items) {
  // print the filenames to the console
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
