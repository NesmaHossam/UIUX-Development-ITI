$(".imgItem").click(function (e) {
  var imgSrc = $(e.target).attr("src");
  $(".main-img img").attr("src", imgSrc);
  $(".main-img").css("display", "flex").hide().fadeIn(500);
});

$(document).on("click", ".main-img", function (e) {
  if ($(e.target).hasClass("main-img")) {
    $(".main-img").hide(500);
  } else {
    $(".main-img").fadeIn(500);
  }
});

var counter = 0;
var totalImages = $(".imgItem").length;

$(".next").click(function () {
  counter++;
  if (counter >= totalImages) {
    counter = 0;
  }
  var imgSrc = $(".imgItem").eq(counter).attr("src");
  $(".main-img img").attr("src", imgSrc);
});

$(".prev").click(function () {
  counter--;
  if (counter < 0) {
    counter = totalImages - 1;
  }
  var imgSrc = $(".imgItem").eq(counter).attr("src");
  $(".main-img img").attr("src", imgSrc);
});
