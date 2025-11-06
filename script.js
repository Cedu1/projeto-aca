function contatoWhatsApp(produto) {
  const numero = '554199653950';
  const mensagem = `Olá! Tenho interesse no produto: ${produto}`;
  const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

function alternarTema() {
  const body = document.body;
  body.classList.toggle('dark-theme');
  const temaAtual = body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('tema', temaAtual);
}

window.onload = () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') document.body.classList.add('dark-theme');
  const lang = localStorage.getItem('lang') || 'pt';
  changeLang(lang);
};

const textos = {
  pt: {
    heroTitulo: "Soluções em Conforto e Estilo Automotivo",
    heroTexto: "Personalize o interior do seu veículo com qualidade e tecnologia ACA",
    btnProdutos: "Ver Produtos",
    produtosTitulo: "Nossos Produtos",
    prod1Nome: "Banco Automotivo Premium",
    prod1Desc: "Conforto e acabamento de primeira linha.",
    prod2Nome: "Bancos Soft",
    prod2Desc: "Eficiência e conforto garantidos para longas viagens.",
    prod3Nome: "Banco com Apoio de Cabeça",
    prod3Desc: "Design ergonômico e visual moderno.",
    btn1: "Comprar", btn2: "Comprar", btn3: "Comprar",
    navProdutos: "Produtos", navServicos: "Serviços", navContato: "Contato"
  },
  en: {
    heroTitulo: "Solutions in Automotive Comfort and Style",
    heroTexto: "Customize your vehicle's interior with ACA's quality and technology.",
    btnProdutos: "View Products",
    produtosTitulo: "Our Products",
    prod1Nome: "Premium Automotive Seat",
    prod1Desc: "Comfort and top-quality finishing.",
    prod2Nome: "Soft Seats",
    prod2Desc: "Efficiency and comfort for long trips.",
    prod3Nome: "Headrest Seat",
    prod3Desc: "Ergonomic design and modern look.",
    btn1: "Buy Now", btn2: "Buy Now", btn3: "Buy Now",
    navProdutos: "Products", navServicos: "Services", navContato: "Contact"
  },
  es: {
    heroTitulo: "Soluciones en Confort y Estilo Automotriz",
    heroTexto: "Personaliza el interior de tu vehículo con la calidad y tecnología de ACA.",
    btnProdutos: "Ver Productos",
    produtosTitulo: "Nuestros Productos",
    prod1Nome: "Asiento Automotriz Premium",
    prod1Desc: "Comodidad y acabado de primera calidad.",
    prod2Nome: "Asientos Soft",
    prod2Desc: "Eficiencia y confort garantizados para viajes largos.",
    prod3Nome: "Asiento con Apoyo de Cabeza",
    prod3Desc: "Diseño ergonómico y apariencia moderna.",
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
