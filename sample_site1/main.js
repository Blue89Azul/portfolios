$(function() {
  $("button.sp-menu").click(menu_open);

  function menu_open() {
    $(".global-nav ul.invisible").slideToggle("quick");
  }
});
