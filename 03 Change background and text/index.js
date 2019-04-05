$(".interface").on("click", function () {
  $(this).attr("class")
  if ($(this).hasClass("orange")) {
    $("body").attr("class", "orange")

    // $("body").toggleClass("orange")
    // $("body").removeClass("green")

    // $("body").css("background-color", "orange")
    // $("body").css({
    //   "background-color": "orange",
    //   "font-size": "130px"
    // })
  }

  if ($(this).hasClass("green")) {
    $("body").attr("class", "green")

    // $("body").toggleClass("green")
    // $("body").removeClass("orange")
  }

  if ($(this).hasClass("increase")) {
    $(".text").animate({
      "font-size": "+=10"
    }, 500)
  }

  if ($(this).hasClass("move")) {
    $(".text").animate({
      "left": "+=10%"
    }, 500)
  }
})