class Column {
  constructor(column_id, width, color) {
    this.id        = column_id;
    this.column_id = "column" + column_id;
    this.input_id  = "input" + column_id;
    this.delete_id = "delete" + column_id;
    this.width     = width;
    this.color     = color;

    this.elm      = this.getColumn();
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

  getDeleteButton() {
    const delete_button = document.createElement('button');
    const plus          = document.createElement('i');

    delete_button.id = this.delete_id;
    delete_button.classList.add('delete');
    plus.classList.add('fa', 'fa-times');

    delete_button.appendChild(plus);

    return delete_button;
  }

  getColumn() {
    const column        = document.createElement('div');
    const input         = this.getInput();
    const delete_button = this.getDeleteButton();

    column.id = this.column_id;
    column.classList.add('swatch');

    column.appendChild(delete_button);
    column.appendChild(input);

    return column;
  }
}
