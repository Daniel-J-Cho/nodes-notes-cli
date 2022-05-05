const fs = require('fs');
const data = require('./data.json');
const operation = process.argv[2];
const str = process.argv[3];

if (operation === 'read') {
  for (const entries in data.notes) {
    console.log(`${entries}: ${data.notes[entries]}`);
  }
} else if (operation == 'add') {
  console.log(data);
  fs.writeFile('./data.json', JSON.stringify(data.notes.str, null, 2), 'utf8', err => {
      if (err) throw err;
    });
  data.nextId++
};
