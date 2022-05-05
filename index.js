const fs = require('fs');
const data = require('./data.json');
const operation = process.argv[2];
const str = process.argv[3];
const note = process.argv[4];

if (operation === 'read') {
  for (const entries in data.notes) {
    console.log(`${entries}: ${data.notes[entries]}`);
  }
} else if (operation == 'add') {
  data.notes[data.nextId] = str;
  data.nextId++;
  const stringified = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', stringified, 'utf8', err => {
    if (err) throw err;
  });
} else if (operation === 'update') {
  data.notes[str] = note;
  const stringified = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', stringified, 'utf8', err => {
    if (err) throw err;
  });
} else if (operation === 'delete') {
  delete data.notes[str];
  const stringified = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', stringified, 'utf8', err => {
    if (err) throw err;
  });
};
