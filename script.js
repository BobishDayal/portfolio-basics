"use strict";

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});

const sections = document.querySelectorAll(".content-box");
const option = {
  root: null,
  threshold: 0.65,
  rootMargin: "-50px ",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    console.log(entry.target);

    intersectionHandler(entry);
  });
}, option);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;

  const shouldActive = document.querySelector("nav a.nav-link--active");

  const currentActive = document.querySelector("nav a[data-ref=" + id + "]");

  if (currentActive) {
    currentActive.classList.add("nav-link--active");
  }

  if (shouldActive) {
    shouldActive.classList.remove("nav-link--active");
  }
}
