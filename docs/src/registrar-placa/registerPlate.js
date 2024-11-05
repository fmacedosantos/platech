async function submitForm() {
    const placa = document.getElementById('placa').value;
    const solicitante = document.getElementById('solicitante').value;
    const tipo = document.getElementById('tipo').value;
    const valor = parseFloat(document.getElementById('valor').value) || 0;
    const formaPagamento = document.getElementById('formaPagamento').value;
    const data = {
      plate: placa,
      applicant: solicitante,
      type: tipo,
      value: valor,
      paymentMethod: formaPagamento
    };
    try {
      const response = await fetch('https://platech-b2bf5ba2cfc9.herokuapp.com/plates/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log("API Response:", result);
      if (result.success = true) {
        alert("Placa registrada com sucesso!");
      } else {
        alert("Erro ao registrar placa: " + (result.message || "Tente novamente"));
      }
      document.getElementById('registerForm').reset();
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Falha ao conectar com a API.");
    }
  }
