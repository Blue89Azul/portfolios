$(function() {
  // スマホメニュー開閉
  $(".sp-menu").on("click", addClass);
  $(".sp-menu-items").on("click", removeClass);

  function addClass() {
    $(".sp-menu-items").addClass("sp-menu-items-open");
  }

  function removeClass() {
    $(".sp-menu-items").removeClass("sp-menu-items-open");
  }

});
