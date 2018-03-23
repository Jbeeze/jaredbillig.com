class SwatchController {
  constructor() {
    this.columns = [];
    this.column_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.init();
  }

  init() {
    this.createColumn("#fff", this.column_width, 'swatchMain');
  }

  createColumn(color, width, elm_id) {
    const column = new Column(color, width, elm_id);
    this.columns.push(column);
  }

  setColumnColor(column, color) {
    column.setColor(color);
  }

}

const Swatch = new SwatchController();
