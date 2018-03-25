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
    // remove_column_button.addEventListener('click', () => this.removeColumn());;
  }

  addColumn() {
    const new_width = this.width_of_window / (this.columns.length + 1);
    const container = document.getElementById('container');

    const column    = this.createNewColumn(new_width, '#fff');

    container.appendChild(column.getColumn());
    column.init();

    this.columns.push(column);

    if (this.columns.length > 1) {
      this.updateWidthOfColumns(new_width);
    }

  }

  createNewColumn(width, color) {
    const column_id = this.columns.length;
    const column    = new Column(column_id, width, color);

    return column;
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

  findColumnByInputId(input_id) {
    return this.columns.reduce(col => {
      return col.input_id == input_id;
    })
  }
}

const Swatch = new SwatchController();
