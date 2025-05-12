const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Array de perguntas e respostas
const perguntasRespostas = [
    {
        pergunta: 'senha',
        resposta: 'Para redefinir sua senha, clique em "Esqueci minha senha".'
    },
    {
        pergunta: 'erro',
        resposta: 'Parece que houve um erro. Encaminharemos sua solicitação ao setor de suporte.'
    },
    {
        pergunta: 'financeiro',
        resposta: 'Você será redirecionado ao setor financeiro. Aguarde...'
    },
    {
        pergunta: 'default',
        resposta: 'Não entendi sua pergunta. Encaminharemos ao setor responsável.'
    }
];

app.post('/api/chat', (req, res) => {
    const { pergunta } = req.body;
    const texto = pergunta.toLowerCase();

    // Procurando a resposta com base na pergunta
    const respostaEncontrada = perguntasRespostas.find(item => texto.includes(item.pergunta));

    // Se encontrou uma pergunta correspondente
    if (respostaEncontrada) {
        res.json({ resposta: respostaEncontrada.resposta });
    } else {
        // Caso não encontre, retorna a resposta padrão
        res.json({ resposta: perguntasRespostas.find(item => item.pergunta === 'default').resposta });
    }
});

app.listen(3000, () => {
    console.log('API rodando em http://localhost:3000');
});
