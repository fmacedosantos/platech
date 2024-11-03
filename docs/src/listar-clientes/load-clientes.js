const apiUrl = 'http://localhost/api-platech/clients/fetch';

// Função para verificar autenticação
function checkAuthentication() {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    localStorage.setItem('loginMessage', 'Por favor faça o login para acessar o sistema');
    window.location.href = "../../index.html";
    return false;
  }
  return true;
}

// Lista os clientes
async function fetchAndDisplayClients() {
  try {
    const response = await fetch(apiUrl);
        
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


if (checkAuthentication()) {
  fetchAndDisplayClients();
}