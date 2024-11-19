const apiUrl = 'https://platech-b2bf5ba2cfc9.herokuapp.com/clients/fetch';

function checkAuthentication() {
  const token = localStorage.getItem('authToken');
  if (!token) {
    localStorage.setItem('loginMessage', 'Por favor faça o login para acessar o sistema');
    window.location.href = "../../index.html";
    return false;
  }
  return true;
}

async function fetchAndDisplayClients() {
  const feedback = document.getElementById('feedbackMessage');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Erro ao buscar dados da API');

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

      feedback.textContent = "";
    } else {
      feedback.textContent = "Nenhum dado encontrado.";
      feedback.style.color = "red";
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    feedback.textContent = "Erro ao conectar com a API.";
    feedback.style.color = "red";
  }
}

if (checkAuthentication()) {
  fetchAndDisplayClients();
}
