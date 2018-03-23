class Column {
  constructor(color, width, elm) {
    this.color = color;
    this.width = width;
    this.elm_id = elm;

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
