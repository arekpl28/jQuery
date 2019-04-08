// $(".article button").on("click", function () {
//   $("section.modal-wrap").addClass("active");
//   $("section.article").addClass("blur")
//   $("section.article").addClass("active")
//   console.log('dziala');
// })

// $("section.modal-wrap div.modal span.hide i").on("click", function () {
//   $("section.modal-wrap").removeClass("active");
//   $("section.article").removeClass("blur")
//   $("section.article").removeClass("active")
// })


// short version

$(".article button, span.hide").on("click", function () {
  console.log('dziala');
  $("section.modal-wrap").toggleClass("active");
  $("section.article").toggleClass("blur active")
})