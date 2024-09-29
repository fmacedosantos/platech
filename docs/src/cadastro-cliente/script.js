document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.body.classList.toggle("navbar-open");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.body.classList.remove("navbar-open");
});

const clientMenu = document.getElementById('clientMenu');

clientMenu.addEventListener('change', function() {
  const selectedOption = this.value; 

  if (selectedOption == 'Cadastrar Clientes') { 
    window.location.href = '../cadastro-cliente/cadastro-cliente.html'; 
  }
});