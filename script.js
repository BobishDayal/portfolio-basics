window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});

const sections = document.querySelectorAll("div.content-box");

const config = {
  rootMargin: "-50px,0px,-50%",
};

const observer = new IntersectionObserver(function (entries, self) {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.value;
  const currentlyActive = document.querySelector("nav li.active");

  if (currentlyActive) {
    currentlyActive.classList.add(".nav-link--active");
  }
}
