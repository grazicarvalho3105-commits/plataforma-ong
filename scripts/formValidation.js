// formValidation.js - máscaras e validação para formCadastro
(function () {
  function applyMasks() {
    const cpf = document.getElementById('cpf');
    const telefone = document.getElementById('telefone');
    const cep = document.getElementById('cep');

    if (cpf) {
      cpf.addEventListener('input', () => {
        cpf.value = cpf.value
          .replace(/\D/g, '')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      });
    }

    if (telefone) {
      telefone.addEventListener('input', () => {
        telefone.value = telefone.value
          .replace(/\D/g, '')
          .replace(/^(\d{2})(\d)/g, '($1) $2')
          .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
      });
    }

    if (cep) {
      cep.addEventListener('input', () => {
        cep.value = cep.value
          .replace(/\D/g, '')
          .replace(/^(\d{5})(\d)/, '$1-$2');
      });
    }
  }

  function attachValidation() {
    const form = document.getElementById('formCadastro');
    if (!form) return;

    // cria/usa elemento de mensagem para feedback
    let mensagem = document.getElementById('mensagem');
    if (!mensagem) {
      mensagem = document.createElement('div');
      mensagem.id = 'mensagem';
      form.parentNode.insertBefore(mensagem, form.nextSibling);
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = (document.getElementById('nome') || {}).value || '';
      const email = (document.getElementById('email') || {}).value || '';
      const telefone = (document.getElementById('telefone') || {}).value || '';

      if (!nome.trim() || !email.trim() || !telefone.trim()) {
        mensagem.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        mensagem.style.color = 'red';
        return;
      }

      if (!email.includes('@')) {
        mensagem.textContent = 'E-mail inválido.';
        mensagem.style.color = 'red';
        return;
      }

      mensagem.textContent = 'Cadastro enviado com sucesso! Obrigada por ajudar.';
      mensagem.style.color = 'green';
      form.reset();
    });
  }

  // Inicializa quando DOM é carregado
  document.addEventListener('DOMContentLoaded', () => {
    applyMasks();
    attachValidation();
  });

  // Re-inicializa quando carregamos conteúdo via SPA (templates.js dispara 'contentLoaded')
  document.addEventListener('reInitValidation', () => {
    applyMasks();
    attachValidation();
  });
})();
