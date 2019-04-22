
// ...burger...

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn-active')
});

// ...menu-hide...

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.navbar').toggleClass('navbar-open');
});