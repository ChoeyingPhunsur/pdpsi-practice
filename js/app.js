$('document').ready(function(){
  // Scroll feature with header links
  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 55
    }, 500);
    return false;
  });

});

