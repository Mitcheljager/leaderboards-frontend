$(function() {
  $('.js-toggle-bubble').on('click', toggleBubble);
});


var toggleBubble = function() {
  var target = $(this).next('.js-bubble');

  $('.leaderboards-item__bubble--is-active').not(target).removeClass('leaderboards-item__bubble--is-active');
  target.toggleClass('leaderboards-item__bubble--is-active');
}
