const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Array de perguntas e respostas, agora com sinônimos
const perguntasRespostas = [
    {
        pergunta: ['senha', 'esqueci a senha', 'login', 'acesso'],
        resposta: 'Para redefinir sua senha, clique em "Esqueci minha senha".'
    },
    {
        pergunta: ['erro', 'problema', 'falha'],
        resposta: 'Parece que houve um erro. Encaminharemos sua solicitação ao setor de suporte.'
    },
    {
        pergunta: ['financeiro', 'contas', 'pagamento'],
        resposta: 'Você será redirecionado ao setor financeiro. Aguarde...'
    },
    {
        pergunta: ['acessar', 'entrar', 'abrir', 'entrando'],
        resposta: 'Caso esteja tendo dificuldades para acessar algum item, é só clicar no CARD e você será automaticamente redirecionado.'
    },
    {
        pergunta: ['default'],
        resposta: 'Não entendi sua pergunta. Entraremos em contato em breve para tirar sua dúvida.'
    }
];

app.post('/api/chat', (req, res) => {
    const { pergunta } = req.body;
    const texto = pergunta.toLowerCase();

    // Procurando a resposta com base nos sinônimos das perguntas
    const respostaEncontrada = perguntasRespostas.find(item => 
        item.pergunta.some(sinonimo => texto.includes(sinonimo))
    );

    // Se encontrou uma pergunta correspondente
    if (respostaEncontrada) {
        res.json({ resposta: respostaEncontrada.resposta });
    } else {
        // Caso não encontre, retorna a resposta padrão
        res.json({ resposta: perguntasRespostas.find(item => item.pergunta.includes('default')).resposta });
    }
});

app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});
