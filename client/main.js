function formConfig () {
  // R in  uxxRx –or– P in uxxxP
  let prefix = document.querySelector("input[name=prefix]").value.toUpperCase();
  let range = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let first = document.querySelector("input[name='first'").value.toUpperCase();
  let last = document.querySelector("input[name='last'").value.toUpperCase();
  let rowRange = range.slice(range.indexOf(first), (range.indexOf(last) + 1));
  let language = document.querySelector("input[name='language']").value.toUpperCase();

  let table = document.querySelector('.testy');
  table.innerHTML = '';


  // table.appendChild(createHeaderRow(prefix, columnRange));
  table.appendChild(createHeaderRow(prefix, range))

  for (let number of rowRange) {
    // table.appendChild(createRow(prefix, columnRange, number));
    table.appendChild(createRow(prefix, range, number));
  }

  let row = document.createElement('tr');
  let cell = document.createElement('td');
  let input = document.createElement('input');
  input.type = 'submit';
  input.value = 'Submit ';
  cell.appendChild(input);
  row.appendChild(cell)
  table.appendChild(row);
}

function createHeaderRow(prefix, range) {
  let row = document.createElement('tr');
  let cell = document.createElement('td'); //empty cell

  row.appendChild(cell); //adds an empty cell to beginning of row

  for (let value of range) {
    let columnTitle = document.createElement('th');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'columnTitle';
    // input.value = `U${prefix}${value}x`;
    input.value = value;
    columnTitle.appendChild(input);
    row.appendChild(columnTitle);
  }

  return row;
}


function createRow (prefix, range, number) {
  let row = document.createElement('tr');
  let title = document.createElement('td');
  let rowName = document.createElement('input');
  rowName.type = 'text';
  rowName.name = 'rowTitle';
  // rowName.value = number;
  rowName.value = `U${prefix}${number}x`;
  title.appendChild(rowName);
  row.appendChild(title);

  for (let position of range) {
    row.appendChild(createCharacterCell(prefix, position, number));
  }

  return row;
}

function createCharacterCell (prefix, position, number) {
  let language = document.querySelector("input[name='language']").value.toUpperCase();
  let cell = document.createElement('td');

  let code = document.createElement('input');
  code.type = 'text';
  code.name = 'code';
  code.value = `\\U${prefix}${number}${position}`;

  let char = document.createElement('input');
  char.type = 'text';
  char.name = 'char';
  char.value = `U+${prefix}${number}${position}`;

  let name = document.createElement('input');
  name.type = 'text';
  name.name = 'name';
  name.value = language;

  cell.appendChild(code);
  cell.appendChild(char);
  cell.appendChild(name);

  return cell;
}
