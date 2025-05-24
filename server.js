const express = require('express');
const fetch = require('node-fetch');
const app = express();

const PORT = 3000;
const ACCESS_TOKEN = 'SEU_TOKEN_AQUI';
const IG_USER_ID = 'SEU_IG_USER_ID';

app.use(express.static('public'));

app.get('/api/instagram', async (req, res) => {
  try {
    const response = await fetch(`https://graph.facebook.com/v19.0/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`);
    const json = await response.json();
    res.json(json.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados do Instagram' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
