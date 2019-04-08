// $(".me").on("click", function () {
//   $("body, html").animate({
//     scrollTop: $(".s1").offset().top
//   }, 500)
// })
// $(".portfolio").on("click", function () {
//   $("body, html").animate({
//     scrollTop: $(".s2").offset().top
//   }, 500)
// })
// $(".offer").on("click", function () {
//   $("body, html").animate({
//     scrollTop: $(".s3").offset().top
//   }, 500)
// })
// $(".contact").on("click", function () {
//   $("body, html").animate({
//     scrollTop: $(".s4").offset().top,
//   }, 500)
// })

// shorter version with use id

// $("nav a").on("click", function () {
//   const goToSection = "#" + $(this).attr("class");
//   $("body, html").animate({
//     scrollTop: $(goToSection).offset().top
//   }, 500)
// })

// shorter version with use data-section

$("nav a").on("click", function () {
  const goToSection = "[data-section=" + $(this).attr("class") + "]";
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top
  }, 500)
})