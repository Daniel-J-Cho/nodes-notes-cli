const fs = require('fs');
const json = require('./data.json');

fs.writeFile('./data.json', process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  JSON.stringify(data, null, 2);
}))
