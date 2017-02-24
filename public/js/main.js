var menuIsActive = false;

$(function() {
  $('.js-toggle-bubble').on('click', toggleBubble);
  $('.js-toggle-menu').on('click', toggleMenu);
});

var toggleBubble = function() {
  var target = $(this).next('.js-bubble');

  $('.leaderboards-item__bubble--is-active').not(target).removeClass('leaderboards-item__bubble--is-active');
  target.toggleClass('leaderboards-item__bubble--is-active');
}

var toggleMenu = function() {
  menuIsActive = !menuIsActive;

  if (menuIsActive) {
    $('.menu').addClass('menu--is-active');
    $(this).addClass('menu-trigger--is-active');
  } else {
    $('.menu').addClass('menu--is-moving-out');
    $(this).removeClass('menu-trigger--is-active');

    setTimeout(function() {
      $('.menu').removeClass('menu--is-moving-out menu--is-active');
    }, 500);
  }
}
