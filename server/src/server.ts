import express from 'express';

const app = express();
// Rotas: endereço
// Recurso: Entidade do Sistema

// GET: Busca
// POST: Criar
// PUT: Atualizar
// DELETE: Deletar

// POST http://localhost:3333/users = criar usuário
// GET  http://localhost:3333/users = listar usuários
// GET http://localhost:3333/users/5 = Buscar Dados do usuário com ID 5

const users = [
    
    'Diego',
    'Cleiton',
    'Robson'
];

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');

   return response.json(users);
});

app.get('/users/:id')

app.post('/users', (request, response) => {
    const user = {
        name: 'Henrique',
        email: 'henriquev79@gmail.com.br'
    };

    return response.json(user);
});

app.listen(3333);