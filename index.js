const fs = require('fs');
const json = require('./data.json');
const operation = process.argv[2] + '\n';

fs.writeFile('./data.json', operation, 'utf8', (err) => {
  if (err) throw err;
  if (operation === 'read') {
    for (const entries in json.notes) {
      console.log(`${entries}: ${json.notes[entries]}`);
    }
  }
});
