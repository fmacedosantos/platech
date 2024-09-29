document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.body.classList.toggle("navbar-open");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.body.classList.remove("navbar-open");
});
