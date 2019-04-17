$(document).on("scroll", function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  // First section

  const $art2 = $(".art2");
  const art2FromTop = $art2.offset().top;
  const art2Height = ($art2.outerHeight()) / 2;

  const $art3 = $(".art3");
  const art3FromTop = $art3.offset().top;
  const art3Height = ($art3.outerHeight()) / 2;

  const $art4 = $(".art4");
  const art4FromTop = $art4.offset().top;
  const art4Height = ($art4.outerHeight()) / 2;

  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    $art2.addClass("active")
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    $art3.addClass("active")
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    $art4.addClass("active")
  }

  // second section

  const $op1 = $(".op1");
  const $op2 = $(".op2");

  const op1FromTop = $op1.offset().top;
  const op2FromTop = $op2.offset().top;

  if (scrollValue > op1FromTop - windowHeight) {
    $op1.addClass("active")
  }

  if (scrollValue > op2FromTop - windowHeight) {
    $op2.addClass("active")
  }

  if (scrollValue < 100) {
    $("article").removeClass("active")
  }
})