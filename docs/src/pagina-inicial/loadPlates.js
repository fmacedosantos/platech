// Mudar aqui caso a sua api esteja rodando em um link diferente
const apiUrl = 'http://localhost/api-platech/plates/fetch';
    
async function fetchAndDisplayData() {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Erro ao buscar dados da API');
        }

        const data = await response.json();

        if (data.success && data.data) {
            const tableBody = document.getElementById('platesTableBody');

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
        } else {
            alert("Nenhum dado encontrado.");
        }
    } catch (error) {
        console.error(error);
        alert("Erro ao conectar com a API.");
    }
}

window.onload = fetchAndDisplayData;