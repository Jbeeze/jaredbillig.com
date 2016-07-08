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
            // color_input_value = "#" + color_input_value;
            $("#container").css("background-color", color_input_value);
          }

        }
      }
    }
    else {
      e.preventDefault();
    }
  });

});

function splitColumnts() {

}
