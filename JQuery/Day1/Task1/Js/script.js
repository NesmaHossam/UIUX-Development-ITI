$("section").animate({ width: "100%" }, 2000);
$("section").animate({ height: "100vh" }, 2000, function () {
  $("h1").fadeIn(1000, function () {
    $("p ").fadeIn(1000, function () {
      $("img")
        .eq(0)
        .slideDown(1500, function () {
          $("img")
            .eq(1)
            .slideDown(1500, function () {
              $("img").eq(2).slideDown(1500);
            });
        });
    });
  });
});
