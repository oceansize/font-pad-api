'use strict';

const Unicode = require('../schemas/unicode');

function allCells (input) {
  let content = []
  for(let i = 0; i < input.code.length; i += 6) {
    let cells = [{
      code: input.code[i],
      character: input.char[i],
      name: input.name[i],
    },{
      code: input.code[i+1],
      character: input.char[i+1],
      name: input.name[i+1],
    },{
      code: input.code[i+2],
      character: input.char[i+2],
      name: input.name[i+2],
    },{
      code: input.code[i+3],
      character: input.char[i+3],
      name: input.name[i+3],
    },{
      code: input.code[i+4],
      character: input.char[i+4],
      name: input.name[i+4],
    },{
      code: input.code[i+5],
      character: input.char[i+5],
      name: input.name[i+5],
    }]

    content.push({cells: cells})
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
