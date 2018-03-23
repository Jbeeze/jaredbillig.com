class Column {
  constructor(width, elm_id, color) {
    this.width = width;
    this.elm_id = elm_id;
    this.color = color;

    this.init();
  }

  init() {
    this.setColor(this.color);
    this.setWidth(this.width);
  }

  setColor(color) {
    document.getElementById(this.elm_id).style.background = color;
  }

  setWidth(width) {
    document.getElementById(this.elm_id).style.width = width;
  }
}
