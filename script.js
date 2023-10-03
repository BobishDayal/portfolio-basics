window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader");
  });
});

// const sections = document.querySelectorAll(".content-box");
// const options = {};
// const observer = new IntersectionObserver(function (enteries, observer) {
//   enteries.forEach((entry) => {
//     console.log(entry);
//   });
// });

// observer.observe(sections);
console.log("hello");
