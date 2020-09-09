import Knex from 'knex';


export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Poliomelite', image: 'lampadas.svg'},
        { title: 'Raiva', image: 'lampadas.svg'},
        { title: 'Gripe', image: 'lampadas.svg'},
        { title: 'Corona Vírus', image: 'lampadas.svg'},
        { title: 'Sarampo', image: 'lampadas.svg'},
        { title: 'Febre Amarela', image: 'lampadas.svg'}
    ]);


}