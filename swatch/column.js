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

    this.setInputListener(this.input_id);
  }

  setColor(color) {
    this.color = color;
    document.getElementById(this.column_id).style.background = color;
  }

  setWidth(width) {
    this.width = width;
    document.getElementById(this.column_id).style.width = width;
  }

  getInputColor() {
    return document.getElementById(this.input_id).value();
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

  getColumnElementById(id) {
    return document.getElementById(id);
  }

  setInputListener(input_id) {
    const input = document.getElementById(input_id);

    input.addEventListener('keypress', e => this.checkKeyPress(e, input))
  }

  checkKeyPress(e, input) {
    const key      = e.which || e.keyCode;

    if (key === 13) {
      const column = this.getColumnElementById(this.column_id);
      const color  = input.value;

      this.setColor(color);
    }
  }
}
