"use strict";

const navLinks = document.querySelectorAll(".header_li");
const containers = document.querySelectorAll(".containers");

// REMOVE ACTIVE CLASS/STYLING
const resetLinks = () => {
  navLinks.forEach((nl) => {
    nl.classList.remove("active");
  });
};

// CLICK EVENT FOR NAVLINKS
navLinks.forEach((nl) => {
  nl.addEventListener("click", (e) => {
    resetLinks();

    if (!e.currentTarget.classList.contains("active")) {
      nl.classList.add("active");
    }

    // SLIDE IN MATCHING CONTAINER TO NAVLINKS
    const getCurrentClassName = e.currentTarget.classList[1];

    containers.forEach((c) => {
      const matchingContainer = c.getAttribute("id");

      if (matchingContainer == getCurrentClassName) {
        c.classList.add("moveLeft");
      } else {
        c.classList.remove("moveLeft");
      }
    });
  });
});
