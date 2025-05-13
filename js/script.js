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

// Alternar a visibilidade da caixa de ajuda ao clicar no botão
botaoAjuda.addEventListener('click', () => {
  caixaAjuda.classList.toggle('visivel'); // Adiciona/Remove a classe 'visivel'
});

// Fechar a caixa de ajuda ao clicar no botão de fechar
fecharAjuda.addEventListener('click', () => {
  caixaAjuda.classList.remove('visivel'); // Remove a classe 'visivel'
});