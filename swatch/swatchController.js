class SwatchController {
  constructor() {
    this.columns = [];
    this.width_of_window = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.keys = {
      ENTER_KEY : 13,
      HASH_KEY  : 35,
    }

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

  widthOfColumns(number_of_columns) {
    return this.width_of_window / number_of_columns;
  }

  setColumnListeners(column) {
    const input         = document.getElementById(column.input_id);
    const delete_button = document.getElementById(column.delete_id);

    input.addEventListener('keypress', e => this.checkKeyPress(e, input));
    delete_button.addEventListener('click', () => this.removeColumn(column));;
  }

  checkKeyPress(e, input) {
    const key      = e.which || e.keyCode;
    const ENTER    = this.keys.ENTER_KEY;

    if (key === ENTER) {
      const column = this.getColumnFromInputId(input.id);
      const color  = input.value;

      this.setColumnColor(column, color);
    }
  }

  addColumn() {
    const container        = document.getElementById('container');
    const width_of_columns = this.widthOfColumns(this.columns.length + 1);
    const column           = this.createNewColumn(width_of_columns, '#fff');


    container.appendChild(column.elm);
    column.init();

    this.columns.push(column);

    if (this.columns.length) {
      this.updateWidthOfColumns(width_of_columns);
    }

    this.setColumnListeners(column);
  }

  createNewColumn(width, color) {
    const column_id = this.columns.length;
    const column    = new Column(column_id, width, color);

    return column;
  }

  removeColumn(column) {
    this.columns.splice(column.id, 1);
    column.elm.remove();
    const width_of_columns = this.widthOfColumns(this.columns.length);

    this.updateWidthOfColumns(width_of_columns);
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

  setColumnWidth(column, width) {
    column.setWidth(width);
    document.getElementById(column.column_id).style.width = width;
  }

  findColumnByInputId(input_id) {
    return this.columns.reduce(col => {
      return col.input_id == input_id;
    });
  }
}

const Swatch = new SwatchController();
