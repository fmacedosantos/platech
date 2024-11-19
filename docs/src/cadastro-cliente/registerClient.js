async function submitForm() {
  const clientData = {
    applicant: document.getElementById('nomeCliente').value,
    company: document.getElementById('empresa').value,
    phone: document.getElementById('telefone').value,
    registerType: document.getElementById('tipoCadastro').value,
    priceCar: parseFloat(document.getElementById('valorCarro').value) || 0,
    priceMotorcycle: parseFloat(document.getElementById('valorMoto').value) || 0
  };

  const feedback = document.getElementById('feedbackMessage');

  try {
    // Mudar aqui caso a sua api esteja rodando em um link diferente
    const response = await fetch('https://platech-b2bf5ba2cfc9.herokuapp.com/clients/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientData)
    });

    const result = await response.json();
    console.log("API Response:", result);

    if (result.success = true) {
      feedback.textContent = "Cliente registrado com sucesso!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Erro ao registrar cliente: " + (result.message || "Tente novamente");
      feedback.style.color = "red";
    }

    document.getElementById('registerForm').reset();
  } catch (error) {
    console.error("Erro na requisição:", error);
    feedback.textContent = "Falha ao conectar com a API.";
    feedback.style.color = "red";
  }
}