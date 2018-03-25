class SwatchController {
  constructor() {
    this.columns = [];
    this.width_of_window = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.init();
  }

  init() {
    this.createNewColumn(this.width_of_window, "#fff");
    this.addEventListeners();
  }

  addEventListeners() {
    const add_column_button    = document.getElementById('addSwatch');
    const remove_column_button = document.getElementById('deleteSwatch');
    const color_input          = document.getElementById('color0');

    add_column_button.addEventListener('click', () => this.addColumn());
    remove_column_button.addEventListener('click', () => this.removeColumn());
    color_input.addEventListener('keypress', e => this.checkForEnterKey(e, color_input));
  }

  createNewColumn(width, color) {
    const column_id = this.columns.length;
    const column    = new Column(column_id, width, color);

    this.addColumn(column);
  }

  addColumn(column) {
    const new_width       = this.width_of_window / (this.columns.length + 1);
    const column_elm      = document.createElement('div');
    const container       = document.getElementById('container');

    column_elm.id = column.column_id;
    column_elm.classList.add('swatch');
    console.log(column_elm);

    container.appendChild(column_elm);

    this.columns.push(column);

    if (this.columns.length > 1) {
      this.updateWidthOfColumns(new_width);
    }

  }

  setColumnColor(column, color) {
    column.setColor(color);
  }

  setColumnWidth(column, width) {
    column.setWidth(width);
  }

  getColumn(idx) {
    return this.columns[idx];
  }

  updateWidthOfColumns(width) {
    for(let column of this.columns) {
      this.setColumnWidth(column, width);
    }
  }

  checkForEnterKey(e, input) {
    const key      = e.which || e.keyCode;

    if (key === 13) {
      const column = input.parentNode;
      const color  = input.value;

      this.setColumnColor(column, color);
    }
  }
}

const Swatch = new SwatchController();
