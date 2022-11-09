import { increasingNumbers } from "./statistics.js";

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
      $("#cloud-services .accordion-div").not($(this).next()).slideDown(0);
      $("#cloud-services a").next().slideToggle(0);
    });

  $("#design-develop a")
    .not($(this).next())
    .on("click", function () {
      $("#design-develop .accordion-div").not($(this).next()).slideDown(0);
      $("#design-develop a").next().slideToggle(0);
    });
});
increasingNumbers();

const selectButtonn1 = document.querySelector(
  "#price-plan .first-btn .select-btn"
);
const selectButtonn2 = document.querySelector(
  "#price-plan .second-btn .select-btn"
);
const selectButtonn3 = document.querySelector(
  "#price-plan .third-btn .select-btn"
);
selectButtonn1.addEventListener("click", (e) => {
  e.target.innerHTML = "SELECTED";
  selectButtonn2.innerHTML = "SELECT PLAN";
  selectButtonn3.innerHTML = "SELECT PLAN";
});
selectButtonn2.addEventListener("click", (e) => {
  e.target.innerHTML = "SELECTED";
  selectButtonn1.innerHTML = "SELECT PLAN";
  selectButtonn3.innerHTML = "SELECT PLAN";
});
selectButtonn3.addEventListener("click", (e) => {
  e.target.innerHTML = "SELECTED";
  selectButtonn1.innerHTML = "SELECT PLAN";
  selectButtonn2.innerHTML = "SELECT PLAN";
});
