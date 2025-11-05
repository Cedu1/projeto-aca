// ===== Contato WhatsApp =====
function contatoWhatsApp(produto) {
  const numero = '554199653950'; // Substitua pelo seu número real
  const mensagem = `Olá! Tenho interesse no produto: ${produto}`;
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

// ===== Alternar Tema Claro / Escuro =====
function alternarTema() {
  const body = document.body;
  body.classList.toggle('light-theme');
  
  // Salva preferência do usuário
  const temaAtual = body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('tema', temaAtual);
}

// ===== Carregar tema salvo =====
window.onload = () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'light') {
    document.body.classList.add('light-theme');
  }
};
