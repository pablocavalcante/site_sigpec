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

  // Botão de ajuda
  const botaoAjuda = document.getElementById('botao-ajuda');
  const caixaAjuda = document.getElementById('caixa-ajuda');
  const fecharAjuda = document.getElementById('fechar-ajuda');
  const botaoMeAjuda = document.getElementById('botao-ajuda');

  // botaoAjuda.addEventListener('click', () => {
  //   caixaAjuda.style.display = 'block';
  // });

  fecharAjuda.addEventListener('click', () => {
    caixaAjuda.style.display = 'none';
  });

  botaoAjuda.addEventListener('click', () => {
    if(caixaAjuda.style.display === 'none' || caixaAjuda.style.display === ''){
      caixaAjuda.style.display = 'block';
    } else {
      caixaAjuda.style.display = 'none';
    }
  });



  document.querySelector('.form-ajuda').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato.');
    caixaAjuda.style.display = 'none';
  });
