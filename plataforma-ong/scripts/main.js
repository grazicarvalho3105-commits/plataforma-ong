document.addEventListener('DOMContentLoaded', function() {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  cpf.addEventListener('input', () => {
    cpf.value = cpf.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  });

  telefone.addEventListener('input', () => {
    telefone.value = telefone.value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
  });

  cep.addEventListener('input', () => {
    cep.value = cep.value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d)/, '$1-$2');
  });
});

const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("active");
});

// Controle de navegação SPA
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = e.target.getAttribute("href").replace(".html", "");
      loadPage(page);
    });
  });

  function loadPage(page) {
    const template = templates[page];
    if (template) {
      main.innerHTML = template;
    }
  }

  // Carrega página inicial
  loadPage("index");
});

