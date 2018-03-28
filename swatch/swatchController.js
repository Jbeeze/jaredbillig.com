class SwatchController {
  //TODO: Removing columns out of order breaks width adustmnet
  //TODO: Create way to drag columns around
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
    this.addEventListeners();
  }

  addEventListeners() {
    const add_column_button    = document.getElementById('addSwatch');

    add_column_button.addEventListener('click', () => this.addColumn());

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
      this.updateColumnProperties(width_of_columns);
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

    this.updateColumnProperties(width_of_columns);
  }

  setColumnColor(column, color) {
    column.setColor(color);
    document.getElementById(column.column_id).style.background = color;
  }

  getColumnElmFromColumnId(column_id) {
    return document.getElementById(column_id);
  }

  getInputElmFromId(input_id) {
    return document.getElementById(input_id);
  }

  getDeleteElmFromId(delete_id) {
    return document.getElementById(delete_id);
  }

  getColumnFromInputId(input_id) {
    return this.columns[input_id.split('')[input_id.length - 1]];
  }

  getInputColor(column_id) {
    return this.getInputFromColumnId(column_id).value();
  }

  widthOfColumns(number_of_columns) {
    return this.width_of_window / number_of_columns;
  }

  updateColumnProperties(width) {
    const columns = this.columns;

    for(let i in columns) {
      this.setColumnWidth(columns[i], width);
      this.updateColumnIds(columns[i]);
    }
  }

  setColumnWidth(column, width) {
    column.setWidth(width);
    document.getElementById(column.column_id).style.width = width;
  }

  updateColumnIds(column) {
    const index = this.findIndexByColumnId(column.id);
    column.updateIds(index);
    this.setIds(column, index);
  }

  findIndexByColumnId(id) {
    return this.columns.find(column => column.id == id).id;
  }

  setIds(column, index) {
    const { column_id, input_id, delete_id } = column;

    const column_elm = this.getColumnElmFromColumnId(column_id);
    const input_elm  = this.getInputElmFromId(input_id);
    const delete_elm = this.getDeleteElmFromId(delete_id);
    debugger;

    column_elm.id = column_id;
    input_elm.id  = input_id;
    delete_elm.id = delete_id;
  }

  findColumnByInputId(input_id) {
    return this.columns.reduce(col => {
      return col.input_id == input_id;
    });
  }
}

const Swatch = new SwatchController();
