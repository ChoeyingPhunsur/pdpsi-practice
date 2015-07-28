$('document').ready(function(){
  var $root = $('html, body');
  $('a').click(function() {
    $root.animate({
      //scrolltop value needs to something like
      // var targetOffset = $target.offset().top - 55;
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top - 55
    }, 500);
    return false;
  });
});