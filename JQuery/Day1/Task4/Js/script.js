$(".imgItem").click(function (e) {
  var imgSrc = $(e.target).attr("src");
  $(".main-img img").attr("src", imgSrc);
});
