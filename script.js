function contatoWhatsApp(produto) {
      const numero = '55YOURNUMBER'; // Substitua pelo seu número do WhatsApp
        const mensagem = `Olá! Tenho interesse no produto: ${produto}`;
          const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank');
            }

