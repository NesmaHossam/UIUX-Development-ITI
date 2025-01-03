$.get("https://jsonplaceholder.typicode.com/users", function (data) {
  data.forEach(function (ele, index) {
    btn = document.createElement("button");
    $(btn).text(ele.name);
    $(btn).addClass("btn");
    $(btn).attr("id", ele.id);
    $(".show-Btns").append(btn);
  });

  $(".btn").click(function () {
    btnId = $(this).attr("id");
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts?userId=${btnId}`,
      method: "GET",
      success: function (posts) {
        $(".show-data").empty();
        posts.forEach(function (post) {
          newDiv = document.createElement("div");
          postDiv = $(newDiv).text(post.title);

          postDiv.addClass("divs");
          $(".show-data").append(postDiv);
        });
      },
    });
  });
});
