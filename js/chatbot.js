// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('form-dados');
//     const nomeInput = document.getElementById('nome');
//     const emailInput = document.getElementById('email');
//     const telefoneInput = document.getElementById('telefone');
//     const iniciarAtendimentoBotao = form.querySelector('button[type="submit"]');
//     const chatbotContainer = document.getElementById('chatbot-container');
//     const respostaChatbot = document.getElementById('resposta-chatbot');
//     const perguntaInput = document.getElementById('pergunta');
//     const enviarPergunta = document.getElementById('enviar-pergunta');
//     const caixaAjuda = document.getElementById('caixa-ajuda');
//     const botaoAjuda = document.getElementById('botao-ajuda');
//     const fecharAjuda = document.getElementById('fechar-ajuda');

//     const perguntasRespostas = [
//         {
//             sinonimos: ['senha', 'esqueci a senha', 'login', 'acesso', 'dificuldade'],
//             resposta: 'Para redefinir sua senha, clique em "Esqueci minha senha".'
//         },
//         {
//             sinonimos: ['erro', 'problema', 'falha', 'não consigo'],
//             resposta: 'Parece que houve um erro. Encaminharemos sua solicitação ao setor de suporte'
//         },
//         {
//             sinonimos: ['como posso entrar em contato?', 'meios de contato?', 'onde encontro vocês?', 'fale conosco.'],
//             resposta: 'Entraremos em contato com você em breve através do seu e-mail.'
//         },
//         {
//             sinonimos: ['qual o horário de atendimento?', 'horário de funcionamento?', 'vocês trabalham que horas?', 'atendimento ao público.'],
//             resposta: 'Nosso horário de atendimento é de 9h às 17h.'
//         },
        
//     ];

//     const toggleCaixaAjuda = () => {
//         const isHidden = window.getComputedStyle(caixaAjuda).display === 'none';
//         caixaAjuda.style.display = isHidden ? 'block' : 'none';
//         caixaAjuda.classList.toggle('expanded', isHidden);
//     };

//     const mostrarChatbot = () => {
//         nomeInput.disabled = true;
//         emailInput.disabled = true;
//         telefoneInput.disabled = true;
//         iniciarAtendimentoBotao?.remove();
//         chatbotContainer.style.display = 'block';
//         caixaAjuda.style.display = 'block';
//         caixaAjuda.classList.add('expanded');
//     };

//     const resetAtendimento = () => {
//         nomeInput.disabled = false;
//         emailInput.disabled = false;
//         telefoneInput.disabled = false;
//         chatbotContainer.style.display = 'none';
//         caixaAjuda.style.display = 'none';
//         caixaAjuda.classList.remove('expanded');
//         form.style.display = 'block';
//         if (iniciarAtendimentoBotao) {
//             iniciarAtendimentoBotao.style.display = 'block';
//         }
//     };

//     const responderChatbot = (perguntaDigitada) => {
//         if (!perguntaDigitada) {
//             respostaChatbot.textContent = 'Por favor, digite uma pergunta.';
//             return;
//         }
    
//         const perguntaMinuscula = perguntaDigitada.toLowerCase().trim();
//         let respostaEncontrada = null;
    
//         for (const item of perguntasRespostas) {
//             for (const sinonimo of item.sinonimos) {
//                 if (perguntaMinuscula.includes(sinonimo.toLowerCase())) {
//                     respostaEncontrada = item.resposta;
//                     break; // Se encontramos um sinônimo, podemos parar de procurar neste item
//                 }
//             }
//             if (respostaEncontrada) {
//                 break; // Se encontramos uma resposta, podemos parar de procurar nos outros itens
//             }
//         }
    
//         if (respostaEncontrada) {
//             respostaChatbot.textContent = respostaEncontrada;
//         } else {
//             respostaChatbot.textContent = 'Desculpe, não tenho uma resposta para essa pergunta.';
//         }
    
//         perguntaInput.value = '';
//     };

//     // Oculta a caixa de ajuda inicialmente
//     caixaAjuda.style.display = 'none';

//     // Eventos
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const nome = nomeInput.value.trim();
//         const email = emailInput.value.trim();

//         if (!nome || !email) {
//             alert('Por favor, preencha seu nome e e-mail para continuar.');
//             return;
//         }

//         mostrarChatbot();
//     });

//     enviarPergunta.addEventListener('click', () => {
//         responderChatbot(perguntaInput.value.trim());
//     });

//     perguntaInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             enviarPergunta.click();
//         }
//     });

//     botaoAjuda.addEventListener('click', toggleCaixaAjuda);
//     fecharAjuda.addEventListener('click', resetAtendimento);
// });