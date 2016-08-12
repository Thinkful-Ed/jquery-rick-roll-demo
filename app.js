function rickRoll() {
  var rickRollElemt = "<iframe class='rick-roll-iframe' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' frameborder='0'></iframe>"
  $('body').html(rickRollElemt);
  $('title').text('Rick Roll 4eva');
}

$(document).ready(function() {
  rickRoll();
});

// can also do this short hand for `$(document).ready()`
//
// $(function() {
//  rickRoll();
// });