document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-dados');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const iniciarAtendimentoBotao = form.querySelector('button[type="submit"]');
    const chatbotContainer = document.getElementById('chatbot-container');
    const respostaChatbot = document.getElementById('resposta-chatbot');
    const perguntaInput = document.getElementById('pergunta');
    const enviarPergunta = document.getElementById('enviar-pergunta');
    const caixaAjuda = document.getElementById('caixa-ajuda');
    const botaoAjuda = document.getElementById('botao-ajuda'); // Captura o botão de ajuda
    const fecharAjuda = document.getElementById('fechar-ajuda');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();

        if (!nome || !email) {
            alert('Por favor, preencha seu nome e e-mail para continuar.');
            return;
        }

        nomeInput.disabled = true;
        emailInput.disabled = true;
        telefoneInput.disabled = true;

        if (iniciarAtendimentoBotao) {
            iniciarAtendimentoBotao.remove();
        }

        chatbotContainer.style.display = 'block';
        caixaAjuda.classList.add('expanded');
        caixaAjuda.style.display = 'block';
    });

    enviarPergunta.addEventListener('click', () => {
        const pergunta = perguntaInput.value.trim().toLowerCase();

        if (!pergunta) {
            respostaChatbot.textContent = 'Por favor, digite uma pergunta.';
            return;
        }

        let resposta = '';

        if (pergunta.includes('senha') || pergunta.includes('esqueci')) {
            resposta = 'Se você esqueceu sua senha, acesse a página de login e clique em "Esqueci minha senha".';
        } else if (pergunta.includes('erro') || pergunta.includes('problema')) {
            resposta = 'Sentimos muito! Por favor, envie um e-mail para suporte@seudominio.com com os detalhes do problema.';
        } else {
            resposta = 'Não consegui entender sua pergunta. Para atendimento mais completo, entre em contato: suporte@seudominio.com ou (11) 99999-0000.';
        }

        respostaChatbot.textContent = resposta;
        perguntaInput.value = '';
    });

    // Fazer a pergunta com o botão de enter
    perguntaInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            enviarPergunta.click();
        }
    });

    caixaAjuda.style.display = 'none'; // Inicialmente a caixa de ajuda está escondida

    botaoAjuda.addEventListener('click', () => {
        const estiloCaixaAjuda = window.getComputedStyle(caixaAjuda);
        caixaAjuda.style.display = estiloCaixaAjuda.display === 'none' ? 'block' : 'none';
        if (estiloCaixaAjuda.display === 'none') {
            caixaAjuda.classList.add('expanded');
        } else {
            caixaAjuda.classList.remove('expanded');
        }
    });

    fecharAjuda.addEventListener('click', () => {
        caixaAjuda.style.display = 'none';
        caixaAjuda.classList.remove('expanded');
        form.style.display = 'block';
        chatbotContainer.style.display = 'none';
        // Reabilita os campos e (opcionalmente) mostra o botão de iniciar atendimento novamente
        nomeInput.disabled = false;
        emailInput.disabled = false;
        telefoneInput.disabled = false;
        if (iniciarAtendimentoBotao) {
            iniciarAtendimentoBotao.style.display = 'block';
        }
    });
});