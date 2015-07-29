$('document').ready(function(){
  // Scroll feature with header links
  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 55
    }, 500);
    return false;
  });

  // Modal out the About
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("#about-desc");
  var $caption = $("<p></p>");

  $overlay.append($image);
  $("body").append($overlay);

    //Capture the click event to show modal
  $("#about-but").click(function(event){
    $overlay.show();
  });

    //When overlay is clicked
  $overlay.click(function(){
      //Hide the overlay
    $overlay.hide();
  });
});

