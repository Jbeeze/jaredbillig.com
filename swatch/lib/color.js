function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}

function oppositeHex(color) {
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

function oppositeRGB(color) {
  const opposite_rgb = this.oppositeHex(this.hexToRgb(color));
  const { r, g, b }  = opposite_rgb;

  return  "(" + r + "," + g + "," + b + ")";
}


export { hexToRgb, oppositeHex, oppositeRGB }
