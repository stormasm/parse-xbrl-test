// var ParseXbrl = require('parse-xbrl');

var ParseXbrl = require('../index.js');

// path to locally accessible file, does not load file over http/https
ParseXbrl.parse('./examples/ubnt-20190630_htm.xml').then(function(parsedDoc) {
  console.log(parsedDoc);
});
