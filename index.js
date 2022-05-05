const fs = require('fs');
const data = require('./data.json');
const operation = process.argv[2];
const str = process.argv[3];

if (operation === 'read') {
  for (const entries in data.notes) {
    console.log(`${entries}: ${data.notes[entries]}`);
  }
} else if (operation == 'add') {
  fs.writeFile('./data.json', str, 'utf8', )
};
