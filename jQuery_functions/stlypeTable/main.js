$(function() {
  $("th:nth-child(odd)").addClass("odd");
  $("tr:nth-child(even)").addClass("even");

  // 行のハイライト
  $("tr:not(:first-child)").mouseover(function() {
    $(this).addClass("hover");
  }).mouseout(function() {
    $(this).removeClass("hover");
  });

  // 列のハイライト
  $("td").mouseover(function() {
    $("td:nth-child(" + ($("td").index(this) % $("th").length + 1) +
      ")").addClass("hover");
  }).mouseout(function() {
    $("td:nth-child(" + ($("td").index(this) % $("th").length + 1) + ")").removeClass("hover");
  });

});
