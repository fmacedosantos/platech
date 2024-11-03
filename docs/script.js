const getElement = document.getElementById("loginForm");

getElement.addEventListener("submit", async function (event) {
  event.preventDefault();

  const cpf = document.getElementById('cpf').value;
  const password = document.getElementById('senha').value;

  const data = {
    cpf,
    password
  };

  try {
    const response = await fetch('http://localhost/api-platech/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      // Salva o JWT no localStorage
      localStorage.setItem('authToken', result.jwt);
      alert("Login realizado com sucesso!");
      window.location.href = "src/pagina-inicial/pagina-inicial.html";
    } else {
      alert(result.message || "CPF ou senha incorretos.");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Falha ao conectar com a API.");
  }
});

// Verifica se há uma mensagem de login no localStorage
const loginMessage = localStorage.getItem('loginMessage');

if (loginMessage) {
  // Exibe a mensagem para o usuário
  alert(loginMessage);
  // Remove a mensagem do localStorage
  localStorage.removeItem('loginMessage');
}


const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('keypress', () => {
  let cpfLength = cpfInput.value.length;

  if (cpfLength === 3 || cpfLength === 7) {
    cpfInput.value += '.';
  } else if (cpfLength === 11) {
    cpfInput.value += '-';
  }
});
