'use strict';

const Unicode = require('../schemas/unicode');

function allCells (input) {

  let content = []

  //length of columntitle array
  //create cell for each item in above array,
  //push into content array,
  //repeat for the number of rows (16)

  for (let i = 0; i < input.code.length; i += input.columnTitle.length) {
    let code = input.code.slice(i, i + input.columnTitle.length);
    let char = input.char.slice(i, i + input.columnTitle.length);
    let name = input.name.slice(i, i + input.columnTitle.length);

    code = code.map(code => Object.assign({}, { code }));
    char = char.map(char => Object.assign({}, { char }));
    name = name.map(name => Object.assign({}, { name }));


    let cells = [];

    for (let y = 0; y < code.length; y++) {
      cells.push(Object.assign(code[y], char[y], name[y]));
    }

    content.push({ cells });
  }

  for (let j = 0; j < input.rowTitle.length; j++) {
    Object.assign(content[j], { row: input.rowTitle[j] });
  }

  console.log(content);
  return content;
}


module.exports = (input) => {
  return new Unicode ({
    language: input.language,
    url: input.url,
    column: input.columnTitle.map(name => Object.assign({}, { name })),
    content: allCells(input)
  });
}
