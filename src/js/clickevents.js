const bars = document.querySelector("header .fa-bars");
const navbar = document.querySelector("header .col:nth-child(2) ul ");
bars.addEventListener("click", () => {
  if (navbar.classList.contains("d-block")) {
    navbar.classList.remove("d-block");
  } else {
    navbar.classList.add("d-block");
  }
});

$(document).ready(function () {
  $("#cloud-services a")
    .not($(this).next())
    .on("click", function () {
      $("#cloud-services .accordion-div")
        .not($(this).next())
        .slideDown()
        .next()
        .slideToggle();
      $("#cloud-services a").next().slideToggle();
    });

  $("#design-develop a")
    .not($(this).next())
    .on("click", function () {
      $("#design-develop .accordion-div")
        .not($(this).next())
        .slideDown()
        .next()
        .slideToggle();
      $("#design-develop a").next().slideToggle();
    });
});
