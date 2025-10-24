// main.js - controle de menu, contraste e navegação SPA
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuList = document.getElementById("menu-list");
  const contrastToggle = document.getElementById("contrast-toggle");
  const main = document.querySelector("main");

  // Função para abrir/fechar menu de forma acessível
  if (menuBtn && menuList) {
    menuBtn.addEventListener("click", () => {
      menuList.classList.toggle("active");
      const expanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", !expanded);
    });

    menuBtn.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        menuBtn.click();
      }
    });
  }

  // Modo alto contraste
  if (contrastToggle) {
    contrastToggle.addEventListener("click", () => {
      document.body.classList.toggle("high-contrast");
    });
  }

  // Navegação SPA: intercepta links do nav e usa loadPageContent(page)
  function attachNavHandlers() {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      // Remove handlers antigos para evitar duplicação
      link.replaceWith(link.cloneNode(true));
    });

    // Re-query e re-bind
    document.querySelectorAll("nav a").forEach(link => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        // só intercepta links locais que terminam em .html
        if (!href || !href.endsWith(".html")) return;
        e.preventDefault();
        const page = href.replace(".html", "");
        // carrega o conteúdo e atualiza a URL
        loadPageContent(page);
        window.history.pushState({}, "", href);
        // fecha menu mobile se aberto
        if (menuList && menuList.classList.contains("active")) {
          menuList.classList.remove("active");
          menuBtn && menuBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  // Inicializa handlers e carrega a página atual (ou index)
  attachNavHandlers();
  // Se o caminho terminar em .html (ex: /projetos.html), carrega essa página
  (function initialLoad() {
    const path = location.pathname.split("/").pop();
    const page = (path && path.endsWith(".html")) ? path.replace(".html", "") : "index";
    if (typeof loadPageContent === "function") loadPageContent(page);
  })();

  // Quando o usuário usa voltar/avançar do navegador
  window.addEventListener("popstate", () => {
    const path = location.pathname.split("/").pop();
    const page = (path && path.endsWith(".html")) ? path.replace(".html", "") : "index";
    if (typeof loadPageContent === "function") loadPageContent(page);
  });

  // Se conteúdo injetado, reaplicar bind nos links (evento disparado em templates.js)
  document.addEventListener('contentLoaded', () => {
    attachNavHandlers();
    // Caso o formulário exista no conteúdo injetado, garantir que o formValidation está ativo
    // o arquivo formValidation.js já escuta 'DOMContentLoaded', mas como reinjectamos, disparamos evento:
    document.dispatchEvent(new Event('reInitValidation'));
  });
});
