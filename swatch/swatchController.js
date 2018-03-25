class SwatchController {
  constructor() {
    this.columns = [];
    this.width_of_window = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.init();
  }

  init() {
    this.addColumn();
    this.addEventListeners();
  }

  addEventListeners() {
    const add_column_button    = document.getElementById('addSwatch');

    add_column_button.addEventListener('click', () => this.addColumn());

  }

  setColumnListeners(column) {
    const input = document.getElementById(column.input_id);

    input.addEventListener('keypress', e => this.checkKeyPress(e, input));
    // remove_column_button.addEventListener('click', () => this.removeColumn());;
  }

  checkKeyPress(e, input) {
    const key      = e.which || e.keyCode;

    if (key === 13) {
      const column = this.getColumnFromInputId(input.id);
      const color  = input.value;

      this.setColumnColor(column, color);
    }
  }

  addColumn() {
    const new_width = this.width_of_window / (this.columns.length + 1);
    const container = document.getElementById('container');

    const column    = this.createNewColumn(new_width, '#fff');

    container.appendChild(column.getColumn());
    column.init();

    this.columns.push(column);

    if (this.columns.length > 0) {
      this.updateWidthOfColumns(new_width);
    }

    this.setColumnListeners(column);
  }

  createNewColumn(width, color) {
    const column_id = this.columns.length;
    const column    = new Column(column_id, width, color);

    return column;
  }

  setColumnWidth(column, width) {
    column.setWidth(width);
    document.getElementById(column.column_id).style.width = width;
  }

  setColumnColor(column, color) {
    column.setColor(color);
    document.getElementById(column.column_id).style.background = color;
  }

  getColumnElementById(column_id) {
    return document.getElementById(column_id);
  }

  getInputFromColumnId(column_id) {
    return document.getElementById(column);
  }

  getColumnFromInputId(input_id) {
    return this.columns[input_id.split('')[input_id.length - 1]];
  }

  getInputColor(column_id) {
    return this.getInputFromColumnId(column_id).value();
  }

  updateWidthOfColumns(width) {
    for(let column of this.columns) {
      this.setColumnWidth(column, width);
    }
  }

  findColumnByInputId(input_id) {
    return this.columns.reduce(col => {
      return col.input_id == input_id;
    });
  }
}

const Swatch = new SwatchController();
