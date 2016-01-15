$(document).ready(function() {
  $(".term").hover(function() {
    $(this).siblings(".definition").fadeToggle(400);
  });
})
