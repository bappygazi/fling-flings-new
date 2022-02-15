$(function () {
  new fullpage("#fullpage", {
    scrollingSpeed: 1500,
  });

  $('.down-icon a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 0, //no need of parseInt here
        },
        1200,
        "swing",
        function () {
          window.location.hash = target;
        }
      );
  });
});
