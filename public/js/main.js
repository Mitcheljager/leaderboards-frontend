var menuIsActive = false, currentFilter = 'points';

$(function() {
  $('.js-toggle-bubble').on('click', toggleBubble);
  $('.js-toggle-menu').on('click', toggleMenu);
  $('.js-filter-item').on('click', toggleFilterOption);
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

var toggleFilterOption = function() {
  var leaderboards = $('.js-leaderboards'),
      target = $(this).data('target'),
      itemToMoveOut = 'leaderboards__list--is-moving-out-' + currentFilter;

  if (target != currentFilter) {
    console.log('leaderboards__list--is-filtered-by-' + currentFilter);

    $('.filter__item--is-active').removeClass('filter__item--is-active');
    $(this).addClass('filter__item--is-active');

    leaderboards.addClass(itemToMoveOut + ' leaderboards__list--is-filtered-by-' + target);
    leaderboards.removeClass('leaderboards__list--is-filtered-by-' + currentFilter);

    setTimeout(function() {
      leaderboards.removeClass(itemToMoveOut);
    }, 300);

    currentFilter = target;
  }
}
