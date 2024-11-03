document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.body.classList.toggle("navbar-open");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.body.classList.remove("navbar-open");
});

const clientMenu = document.getElementById("clientMenu");

clientMenu.addEventListener("change", function () {
  const selectedOption = this.value;

  if (selectedOption == "Cadastrar Clientes") {
    window.location.href = "../cadastro-cliente/cadastro-cliente.html";
  }

  if (selectedOption == "Fechamento") {
    window.location.href = "../fechamento-clientes/fechamento-cliente.html";
  }
});

const placMenu = document.getElementById("placMenu");

placMenu.addEventListener("change", function () {
  const selectedOption = this.value;

  if (selectedOption == "Registrar placas") {
    window.location.href = "../registrar-placa/registrar-placas.html";
  }
});

const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", () => {
  window.location.href = "../pagina-inicial/pagina-inicial.html";
});

const controlMenu = document.getElementById("controlMenu");

controlMenu.addEventListener("change", function () {
  const selectedOption = this.value;

  if (selectedOption == "Lotes") {
    window.location.href = "../lotes_estoque/index.html";
  }
});

function checkAuthentication() {
  const token = localStorage.getItem('authToken');

  if (!token) {
    localStorage.setItem('loginMessage', 'Por favor faça o login para acessar o sistema');
    window.location.href = "../../index.html";
  }
}

window.onload = checkAuthentication;