"use strict";

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});

const section = document.querySelector(".section-1");
const option = {};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    alert(entry.target);
  });
}, option);

observer.observe(section);
