'use strict';

const Unicode = require('../schemas/unicode');

function allCells (input) {

  let content = []

  //length of columntitle array
  //create cell for each item in above array,
  //push into content array,
  //repeat for the number of rows (16)
  let cells = [];
  for(let i = 0; i < input.code.length; i++) {
    console.log(input.code.splice(i, input.columnTitle.length));
    // input.columnTitle.forEach(item => {
    //   console.log(item);
    //   let obj = {
    //     code: input.code[i+input.columnTitle.indexOf(item)],
    //     char: input.char[i+input.columnTitle.indexOf(item)],
    //     name: input.name[i+input.columnTitle.indexOf(item)]
    //   }
    //   cells.push(obj);
    // })

    content.push({ cells });

    i += input.columnTitle.length
  }

  for (let j = 0; j < input.rowTitle.length; j++) {
    Object.assign(content[j], {row: input.rowTitle[j]});
  }

  return content
}


module.exports = (input) => {
  return new Unicode ({
    language: input.language,
    url: input.url,
    column: input.columnTitle.map(name => Object.assign({}, { name })),
    content: allCells(input)
  });
}
