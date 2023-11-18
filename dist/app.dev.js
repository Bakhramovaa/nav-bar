"use strict";

var navAnim = function navAnim() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");
  var navLinks = document.querySelector(".nav-links li"); // Toggle nav

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active"); // Animete items

    navLinks.forEach(function (link, index) {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "navLinkMove 0.5s ease forwards ".concat(index / 7 + 0.35, "s");
      }
    });
  });
};

navAnim();