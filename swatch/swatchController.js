class SwatchController {
  constructor() {
    this.columns = [];
    this.width_of_window = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.init();
  }

  init() {
    this.createNewColumn(this.width_of_window, 'column0', "#fff");
    this.addEventListeners();
  }

  addEventListeners() {
    const add_column_button    = document.getElementById('addSwatch');
    const remove_column_button = document.getElementById('deleteSwatch');
    const color_input          = document.getElementById('color');
    const self                 = this;

    add_column_button.addEventListener('click', () => this.addColumn());
    remove_column_button.addEventListener('click', () => this.removeColumn());
    color_input.addEventListener('keypress', e => this.checkForEnterKey(e, color_input));
  }

  addColumn() {
    const new_width       = this.width_of_window / (this.columns.length + 1);
    const last_column     = document.getElementById(this.columns[length].elm_id);
    const new_column      = last_column.cloneNode(true);

    new_column.id = "column" + this.columns.length;
    last_column.parentNode.appendChild(new_column);

    this.createNewColumn(new_width, new_column.id, '#fff');

    this.updateWidthOfColumns(new_width);
  }

  createNewColumn(width, elm_id, color) {
    const column = new Column(width, elm_id, color);
    this.columns.push(column);
  }

  removeColumn() {
    console.log('delete');
  }

  setColumnColor(column, color) {
    column.setColor(color);
  }

  setColumnWidth(column, width) {
    column.setWidth(width);
  }

  updateWidthOfColumns(width) {
    for(let column of this.columns) {
      this.setColumnWidth(column, width);
    }
  }

  checkForEnterKey(e, input) {
    const key      = e.which || e.keyCode;

    if (key === 13) {
      console.log()
      const column = input.parentNode;
      const color  = input.value;
      this.setColumnColor(column, color);
    }
  }
}

const Swatch = new SwatchController();
