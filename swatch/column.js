class Column {
  constructor(column_id, width, color) {
    this.column_id = "column" + column_id;
    this.input_id  = "input" + column_id;
    this.width     = width;
    this.color     = color;
  }

  init() {
    this.setColor(this.color);
    this.setWidth(this.width);
  }

  setColor(color) {
    this.color = color;
  }

  setWidth(width) {
    this.width = width;
  }

  getInput() {
    const input = document.createElement('input');
    input.id = this.input_id;
    input.classList.add('color_input');
    input.placeholder = '#';

    return input;
  }

  getColumn() {
    const column = document.createElement('div');
    const input  = this.getInput();

    column.id = this.column_id;
    column.classList.add('swatch');

    column.appendChild(input);

    return column;
  }
}
