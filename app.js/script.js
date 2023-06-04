"use strict";

const navLinks = document.querySelectorAll(".header_li");
const containers = document.querySelectorAll(".containers");

navLinks.forEach((nl) => {
  nl.addEventListener("click", (e) => {
    const getAttributeName = e.target.getAttribute("id");

    if (e.target.classList.contains(getAttributeName)) {
      console.log("it works");
    }
  });
});
