class Column {
  constructor(column_id, width, color) {
    this.column_id = "column" + column_id;
    this.input_id  = "input" + column_id;
    this.width     = width;
    this.color     = color;

    this.init();
  }

  init() {
    this.setColor(this.color);
    this.setWidth(this.width);
  }

  setColor(color) {
    document.getElementById(this.column_id).style.background = color;
  }

  setWidth(width) {
    document.getElementById(this.column_id).style.width = width;
  }

  getInputColor() {
    return document.getElementById(this.input_id).value();
  }
}
