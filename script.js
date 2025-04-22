let tamanhoFonte = 100;

  function atualizarFonte() {
    const elementos = document.querySelectorAll('.acessibilidade');
    elementos.forEach(el => {
      el.style.fontSize = tamanhoFonte + '%';
    });
  }

  function aumentarFonte() {
    if (tamanhoFonte < 200) {
      tamanhoFonte += 10;
      atualizarFonte();
    }
  }

  function diminuirFonte() {
    if (tamanhoFonte > 50) {
      tamanhoFonte -= 10;
      atualizarFonte();
    }
  }