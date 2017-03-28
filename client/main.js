function formConfig () {
  // R in  uxxRx –or– P in uxxxP
  let prefix = document.querySelector("input[name=prefix]").value.toUpperCase();
  let range = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let first = document.querySelector("input[name='first'").value.toUpperCase();
  let last = document.querySelector("input[name='last'").value.toUpperCase();
  let columnRange = range.slice(range.indexOf(first), (range.indexOf(last) + 1));

  let table = document.querySelector('.testy');
  table.innerHTML = '';


  table.appendChild(createColumn(prefix, columnRange));
  table.appendChild(document.querySelector("input[name='language']"));

  for (number in range) {
    table.appendChild(createRow(prefix, columnRange, range[number]));
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

function createColumn(prefix, range) {
  let row = document.createElement('tr');
  let cell = document.createElement('td');

  row.appendChild(cell);


  for (position in range) {
    let columnTitle = document.createElement('td');
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'columnTitle';
    input.value = `U${prefix}${range[position]}x`;
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
  rowName.value = number;
  title.appendChild(rowName);
  row.appendChild(title);

  for (position in range) {
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
  code.value = `\\U${prefix}${position}${number}`;

  let char = document.createElement('input');
  char.type = 'text';
  char.name = 'char';
  char.value = `U+${prefix}${position}${number}`;

  let name = document.createElement('input');
  name.type = 'text';
  name.name = 'name';
  name.value = language;

  cell.appendChild(code);
  cell.appendChild(char);
  cell.appendChild(name);

  return cell;
}
