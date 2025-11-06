function contatoWhatsApp(produto) {
  const numero = '554199653950';
  const mensagem = `Olá! Tenho interesse no produto: ${produto}`;
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

function alternarTema() {
  document.body.classList.toggle('dark-theme');
  const tema = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('tema', tema);
}

window.onload = () => {
  const tema = localStorage.getItem('tema');
  if (tema === 'dark') document.body.classList.add('dark-theme');
  const lang = localStorage.getItem('lang') || 'pt';
  changeLang(lang);
};

const textos = {
  pt: {
    heroTitulo: "Transforme o interior do seu carro com conforto e estilo",
    heroTexto: "Ar-condicionado, estofamento e personalização automotiva de alto nível",
    btnProdutos: "Ver produtos",
    produtosTitulo: "Nossos Produtos",
    prod1Nome: "Banco Automotivo Premium",
    prod1Desc: "Conforto e acabamento de primeira linha.",
    prod2Nome: "Bancos Soft",
    prod2Desc: "Eficiência e conforto garantidos.",
    prod3Nome: "Banco com Apoio de Cabeça",
    prod3Desc: "Design moderno e conforto para o dia a dia.",
    btn1: "Comprar", btn2: "Comprar", btn3: "Comprar",
    navProdutos: "Produtos", navServicos: "Serviços", navContato: "Contato"
  },
  en: {
    heroTitulo: "Transform your car interior with comfort and style",
    heroTexto: "Air conditioning, upholstery and high-level customization",
    btnProdutos: "View products",
    produtosTitulo: "Our Products",
    prod1Nome: "Premium Automotive Seat",
    prod1Desc: "Comfort and top-quality finish.",
    prod2Nome: "Soft Seats",
    prod2Desc: "Efficiency and guaranteed comfort.",
    prod3Nome: "Headrest Seat",
    prod3Desc: "Modern design and daily comfort.",
    btn1: "Buy", btn2: "Buy", btn3: "Buy",
    navProdutos: "Products", navServicos: "Services", navContato: "Contact"
  },
  es: {
    heroTitulo: "Transforma el interior de tu auto con confort y estilo",
    heroTexto: "Aire acondicionado, tapicería y personalización automotriz de alto nivel",
    btnProdutos: "Ver productos",
    produtosTitulo: "Nuestros Productos",
    prod1Nome: "Asiento Automotriz Premium",
    prod1Desc: "Comodidad y acabado de primera calidad.",
    prod2Nome: "Asientos Soft",
    prod2Desc: "Eficiencia y comodidad garantizadas.",
    prod3Nome: "Asiento con Apoyo de Cabeza",
    prod3Desc: "Diseño moderno y comodidad diaria.",
    btn1: "Comprar", btn2: "Comprar", btn3: "Comprar",
    navProdutos: "Productos", navServicos: "Servicios", navContato: "Contacto"
  }
};

function changeLang(lang) {
  const langSet = textos[lang];
  Object.keys(langSet).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = langSet[id];
  });
  localStorage.setItem('lang', lang);
                               }
