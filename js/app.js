$('document').ready(function(){
  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
  });
});