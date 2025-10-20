const templates = {
  index: `
    <section>
      <h2>Quem Somos</h2>
      <img src="img/banner.jpeg" alt="Cuidando dos animais">
      <p>A ONG Vida Animal atua no resgate, cuidado e adoção de animais abandonados, promovendo conscientização e respeito à vida.</p>
    </section>
  `,
  projetos: `
    <section>
      <h2>Projetos</h2>
      <div class="card">
        <h3>Campanha de Adoção</h3>
        <p>Ajude-nos a encontrar lares para os nossos amigos de quatro patas.</p>
      </div>
    </section>
  `,
  cadastro: `
    <section>
      <h2>Cadastro</h2>
      <form id="cadastroForm">
        <label>Nome:</label>
        <input type="text" id="nome">
        <label>Email:</label>
        <input type="email" id="email">
        <label>Telefone:</label>
        <input type="text" id="telefone">
        <button type="submit">Enviar</button>
      </form>
      <div id="mensagem"></div>
    </section>
  `
};
