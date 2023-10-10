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
  threshold: 0.2,
  rootMargin: "-50px ",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    intersectionHandler(entry);
  });
}, option);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;

  const shouldActive = document.querySelector("nav a.active");
  const activeHeading = entry.target.querySelector(".main-heading");

  const currentActive = document.querySelector("nav a[data-ref=" + id + "]");
  console.log(activeHeading);

  if (currentActive) {
    currentActive.classList.add("active");
    activeHeading.classList.add("animated");
  }

  if (shouldActive) {
    shouldActive.classList.remove("active");
  }
}

const darkThemeButton = document.querySelector(".toggle");

darkThemeButton.addEventListener("click", darkMode);

function darkMode() {
  darkThemeButton.checked
    ? document.body.classList.add("dark-mode")
    : document.body.classList.remove("dark-mode");

  localStorage.setItem("darkMode", darkThemeButton.checked);
}

window.addEventListener("load", (event) => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");

    darkThemeButton.checked = true;
  }
});
