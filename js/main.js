$(document).ready(function() {
  $("#nav").click(function() {
    $(this).toggleClass("open");
    $(".navOverlay").fadeToggle(400, "swing");
  });

  $("a[class*='scroll']").on("click", function(event) {
    $("#nav").toggleClass("open");
    $(".navOverlay").fadeToggle(400, "swing");
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
  $("a[class*='musicScroll']").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
