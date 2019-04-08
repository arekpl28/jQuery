    $(document).on("scroll", function () {
      $("div.info").text("Current scroll position is: " + $(document).scrollTop().toFixed() + "px")
      if ($(document).scrollTop() > 200) {
        $("div.info").addClass("active")
      } else {
        $("div.info").removeClass("active")
      }
    })