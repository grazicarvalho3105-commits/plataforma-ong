document.addEventListener("submit", (e) => {
  if (e.target.id === "cadastroForm") {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (!nome || !email || !telefone) {
      mensagem.textContent = "Preencha todos os campos!";
      mensagem.style.color = "red";
      return;
    }

    if (!email.includes("@")) {
      mensagem.textContent = "E-mail inválido!";
      mensagem.style.color = "red";
      return;
    }

    if (telefone.length < 9) {
      mensagem.textContent = "Telefone deve ter pelo menos 9 dígitos!";
      mensagem.style.color = "red";
      return;
    }

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
  }
});
