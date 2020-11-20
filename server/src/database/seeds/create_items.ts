import Knex from 'knex';

export async function seed(knex: Knex) {
   await knex('items').insert([
       {title: 'Rotavírus Humano',   image: 'vacina_logo.svg'},
       {title: 'Tetravalente Viral', image: 'vacina_logo.svg'},
       {title: 'Poliomielite Viral', image: 'vacina_logo.svg'},
       {title: 'Meningite',          image: 'vacina_logo.svg'},
       {title: 'Febre Amarela',      image: 'vacina_logo.svg'},
       {title: 'Tríplice Viral',     image: 'vacina_logo.svg'},
    ]);
}