import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Usuários');



    response.json([
        'Henrique',
        'Martim',
        'Da Silva',
        'Vianna'
    ]);
 });

 app.listen(3333);

