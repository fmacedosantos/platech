const getElement = document.getElementById("loginForm");

getElement.addEventListener("submit", function (event) {
  event.preventDefault();

  window.location.href = "src/pagina-inicial/pagina-inicial.html";
});
