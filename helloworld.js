const fs = require('fs');
const capitalize = require('capitalize');


fs.readFile('text.txt', 'utf-8', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(capitalize.words(data));
})
const str = 'hello world'
console.log(capitalize.words(str));