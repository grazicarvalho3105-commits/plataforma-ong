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

