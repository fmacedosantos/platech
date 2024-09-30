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

  if (selectedOption == 'Fechamento') {
    window.location.href = '../fechamento-clientes/fechamento-cliente.html'; 
  }
});

const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
  window.location.href = '../pagina-inicial/pagina-inicial.html'
})