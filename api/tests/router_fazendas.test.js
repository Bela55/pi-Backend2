const supertest = require('supertest');

const app = require('../app');

const PORT = 3000;

app.use(bodyParser.json());

// Adicionando as rotas de fazendas
app.use('/fazendas', fazendasRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});