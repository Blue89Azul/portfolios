$(function() {
  // スマホメニュー開閉
  $(".sp-menu").on("click", addClass);
  $(".sp-menu-items").on("click", removeClass);
  $(window).scroll(menuStyle);

  function addClass() {
    $(".sp-menu-items").addClass("sp-menu-items-open");
  }

  function removeClass() {
    $(".sp-menu-items").removeClass("sp-menu-items-open");
  }

  function menuStyle(){
    if($(this).scrollTop() > 50){
      $(".sp-menu").addClass("sp-menu-style");
    } else {
      $(".sp-menu").removeClass("sp-menu-style");
    }
  }

});
