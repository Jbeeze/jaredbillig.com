$(function() {
  var $swatch = $('.swatch');
  var $color_input = $("#color");
  var ENTER_KEY = 13;
  var DELETE_KEY = 8;
  var LEFT = 37;
  var RIGHT = 39;
  var HASH_KEY = 35;

// 48 -> 57

  var max_length = 7;

  $color_input.on("keypress", function(e) {
    var color_input_value = $color_input.val();
    if ( e.which != HASH_KEY) {

      if ( color_input_value.length == 0 ) {
        $color_input.val( "#" + color_input_value);
      }

      else if ( color_input_value.length < 1 ) {
        $color_input.val(' ');
      }

      else {

        if ( color_input_value.length == max_length ) {

          if ( e.which != ENTER_KEY || e.which != DELETE_KEY || e.which != LEFT || e.which != RIGHT) {
            e.preventDefault();
          }

          if ( e.which == ENTER_KEY ) {
            var rgb = hexToRgb(color_input_value);
            var opp_rgb = oppositeHex(rgb);

            var r = opp_rgb['r'];
            var g = opp_rgb['g'];
            var b = opp_rgb['b'];

            var rgb = "(" + r + "," + g + "," + b + ")";
            // color_input_value = "#" + color_input_value;
            $("#container").css("background-color", color_input_value);
            $('#color').css("border-bottom", "2px solid rgb" + rgb);
            $('#color').css("color", "rgb" + rgb);
          }

        }
      }
    }
    else {
      e.preventDefault();
    }
  });
});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function oppositeHex(color) {
  var r = color['r'];
  var g = color['g'];
  var b = color['b'];

  r = Math.ceil( (Math.sqrt( Math.pow(255, 2) - Math.pow(r, 2) )) );
  g = Math.ceil( (Math.sqrt( Math.pow(255, 2) - Math.pow(g, 2) )) );
  b = Math.ceil( (Math.sqrt( Math.pow(255, 2) - Math.pow(b, 2) )) );

  var rgb = {
    'r' : r,
    'g' : g,
    'b' : b
  }

  return rgb;
}
