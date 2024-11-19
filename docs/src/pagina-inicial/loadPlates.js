const apiUrl = 'https://platech-b2bf5ba2cfc9.herokuapp.com/plates/fetch';

function checkAuthentication() {
  const token = localStorage.getItem('authToken');
  if (!token) {
    localStorage.setItem('loginMessage', 'Por favor faça o login para acessar o sistema');
    window.location.href = "../../index.html";
    return false;
  }
  return true;
}

async function fetchAndDisplayData() {
  const feedback = document.getElementById('feedbackMessage');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Erro ao buscar dados da API');

    const data = await response.json();

    if (data.success && data.data) {
      const tableBody = document.getElementById('platesTableBody');
      tableBody.innerHTML = "";

      data.data.forEach(plate => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${plate.applicant}</td>
          <td>${plate.type}</td>
          <td>${plate.plate}</td>
          <td>${plate.date}</td>
        `;
        tableBody.appendChild(row);
      });

      feedback.textContent = "";
    } else {
      feedback.textContent = "Nenhum dado encontrado.";
      feedback.style.color = "red";
    }
  } catch (error) {
    console.error(error);
    feedback.textContent = "Erro ao conectar com a API.";
    feedback.style.color = "red";
  }
}

if (checkAuthentication()) {
  fetchAndDisplayData();
}
