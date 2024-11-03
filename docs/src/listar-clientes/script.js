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

  if (selectedOption == "Listar Clientes") {
    window.location.href = "../listar-clientes/listar-clientes.html";
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

// Lista os clientes
async function fetchAndDisplayClients() {
  try {
      const response = await fetch('http://localhost/api-platech/clients/fetch');
      if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success && data.data) {
          const tableBody = document.getElementById('platesTableBody');
          tableBody.innerHTML = "";

          data.data.forEach(client => {
              const row = document.createElement('tr');

              row.innerHTML = `
                  <td>${client.applicant}</td>
                  <td>${client.company ? client.company : 'Particular'}</td>
                  <td>${client.phone}</td>
              `;

              tableBody.appendChild(row);
          });
      } else {
          alert("Nenhum dado encontrado.");
      }
  } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com a API.");
  }
}


window.onload = fetchAndDisplayClients;
