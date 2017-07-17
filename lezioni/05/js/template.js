'use strict';

const tmpl = document.querySelector('template');
const list = document.querySelector('#menu');
const btn = document.querySelector('button');

btn.addEventListener('click', (evt) => {
  // Creo un clone del template, indicando nodo sorgente e se voglio copia profonda
  const clone = document.importNode(tmpl,true);
  // Creo un numero randomico tra 1 e 999
  const num = Math.ceil( Math.random() * 999);
  // Modifico il contenuto della copia del template...
  const elem = clone.innerHTML.replace('{{ID}}', num);
  // E la concateno come contenuto della lista
  list.innerHTML += elem;
});
