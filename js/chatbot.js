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
    const botaoAjuda = document.getElementById('botao-ajuda');
    const fecharAjuda = document.getElementById('fechar-ajuda');

    const toggleCaixaAjuda = () => {
        const isHidden = window.getComputedStyle(caixaAjuda).display === 'none';
        caixaAjuda.style.display = isHidden ? 'block' : 'none';
        caixaAjuda.classList.toggle('expanded', isHidden);
    };

    const mostrarChatbot = () => {
        nomeInput.disabled = true;
        emailInput.disabled = true;
        telefoneInput.disabled = true;
        iniciarAtendimentoBotao?.remove();
        chatbotContainer.style.display = 'block';
        caixaAjuda.style.display = 'block';
        caixaAjuda.classList.add('expanded');
    };

    const resetAtendimento = () => {
        nomeInput.disabled = false;
        emailInput.disabled = false;
        telefoneInput.disabled = false;
        chatbotContainer.style.display = 'none';
        caixaAjuda.style.display = 'none';
        caixaAjuda.classList.remove('expanded');
        form.style.display = 'block';
        if (iniciarAtendimentoBotao) {
            iniciarAtendimentoBotao.style.display = 'block';
        }
    };

    const responderChatbot = async (pergunta) => {
        if (!pergunta) {
            respostaChatbot.textContent = 'Por favor, digite uma pergunta.';
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pergunta })
            });
    
            const data = await response.json();
            respostaChatbot.textContent = data.resposta;
            perguntaInput.value = '';
        } catch (error) {
            respostaChatbot.textContent = 'Erro ao se comunicar com o servidor.';
        }
    };

    // Oculta a caixa de ajuda inicialmente
    caixaAjuda.style.display = 'none';

    // Eventos
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = nomeInput.value.trim();
        const email = emailInput.value.trim();

        if (!nome || !email) {
            alert('Por favor, preencha seu nome e e-mail para continuar.');
            return;
        }

        mostrarChatbot();
    });

    enviarPergunta.addEventListener('click', () => {
        responderChatbot(perguntaInput.value.trim());
    });

    perguntaInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            enviarPergunta.click();
        }
    });

    botaoAjuda.addEventListener('click', toggleCaixaAjuda);
    fecharAjuda.addEventListener('click', resetAtendimento);
});
