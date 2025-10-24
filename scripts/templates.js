// templates.js - carrega o <main> das páginas HTML reais
async function loadPageContent(page) {
  try {
    const response = await fetch(`${page}.html`);
    if (!response.ok) throw new Error('Erro ao carregar a página.');
    const text = await response.text();

    // Parseia o HTML retornado e extrai apenas o conteúdo de <main>
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    const mainContent = doc.querySelector("main");

    const main = document.querySelector("main");
    if (main && mainContent) {
      main.innerHTML = mainContent.innerHTML;
      // Após injetar novo conteúdo, reaplica máscaras/validação se necessário
      // (não reimporta scripts, eles permanecem carregados)
      // Dispara evento para qualquer inicialização extra
      document.dispatchEvent(new Event('contentLoaded'));
    } else {
      console.warn("Conteúdo <main> não encontrado na página carregada.");
    }
  } catch (error) {
    console.error("Erro ao carregar página:", error);
  }
}
