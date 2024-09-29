const getElement = document.getElementById("loginForm");

getElement.addEventListener("submit", function (event) {
  event.preventDefault();

  window.location.href = "src/pagina-inicial/pagina-inicial.html";
});

const cpf = document.getElementById('cpf');

cpf.addEventListener('keypress', () => {
  let cpfLength = cpf.value.length;

  if (cpfLength === 3 || cpfLength ===7) {
    cpf.value += '.';
  } else if (cpfLength === 11) {
    cpf.value += '-';
  }
})