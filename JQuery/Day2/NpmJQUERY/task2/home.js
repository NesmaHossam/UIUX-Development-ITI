var aboutoffset = $("#about").offset().top;
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > aboutoffset - 10) {
    $("nav").css("backgroundColor", "rgba(212, 105, 189, 0.2)");
    $("button").show(500);
  } else {
    $("nav").css("backgroundColor", " rgb(5, 5, 5)");
    $("button").hide(500);
  }
});

$("button").click(function () {
  $("html").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
