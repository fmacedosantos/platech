async function loadClients() {
    try {
      const response = await fetch('http://localhost/api-platech/clients/fetch');
      const result = await response.json();
      if (result.success && result.data) {
        const solicitanteSelect = document.getElementById('solicitante');
  
        result.data.forEach(client => {
          const option = document.createElement('option');
          const text = client.company ? `${client.applicant} da empresa ${client.company}` : client.applicant;
          option.value = client.company || client.applicant;
          option.textContent = text;
          solicitanteSelect.appendChild(option);
        });
      } else {
        console.error("Erro ao buscar clientes: ", result.message);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    loadClients();
  });