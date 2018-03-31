class SwatchController {
  //TODO: Create way to drag columns around
  constructor() {
    this.columns = [];
    this.width_of_window = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    this.keys = {
      ENTER : 13,
      HASH  : 35,
      a: 97,
      b: 98,
      c: 99,
      d: 100,
      e: 101,
      f: 102,
      0: 48,
      1: 49,
      2: 50,
      3: 51,
      4: 52,
      5: 53,
      6: 54,
      7: 55,
      8: 56,
      9: 57,
      SHIFT: 16,
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
    const key              = e.key;
    const an_allowable_key = e.key == "#" || !!this.keys[e.key];
    let color_value        = input.value;

    if (!an_allowable_key || color_value.length == 7) {
      e.preventDefault();
    }

    if (color_value.length < 1 && key != "#") {
      input.value = "#" + color_value;
    }

    if (key == "Enter") {
      const column = this.getColumnFromInputId(input.id);

      this.setColumnColor(column, color_value);
      this.setInputColor(input, this.oppositeRGB(color_value));
    }
  }

  setInputColor(input, color) {
    const elm = this.getInputElmFromId(input.id);

    elm.style.color = "rgb" + color;
    elm.style.borderBottom = "2px solid rgb" + color;
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

    column_elm.id = column_id;
    input_elm.id  = input_id;
    delete_elm.id = delete_id;
  }

  findColumnByInputId(input_id) {
    return this.columns.reduce(col => {
      return col.input_id == input_id;
    });
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  oppositeHex(color) {
    let r = color['r'];
    let g = color['g'];
    let b = color['b'];

    r = Math.ceil( (Math.sqrt( Math.pow(255, 2) - Math.pow(r, 2) )) );
    g = Math.ceil( (Math.sqrt( Math.pow(255, 2) - Math.pow(g, 2) )) );
    b = Math.ceil( (Math.sqrt( Math.pow(255, 2) - Math.pow(b, 2) )) );

    const rgb = {
      'r' : r,
      'g' : g,
      'b' : b
    }

    return rgb;
  }

  oppositeRGB(color) {
    const opposite_rgb = this.oppositeHex(this.hexToRgb(color));
    const { r, g, b }  = opposite_rgb;

    return  "(" + r + "," + g + "," + b + ")";
  }
}

const Swatch = new SwatchController();
