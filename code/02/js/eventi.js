// Mini utility per velocizzare selezioni nel DOM
const $ = (selector) => document.querySelector(selector);

const calcola = (evt) => {
  // Blocco l'evento di default (submit)
  evt.preventDefault();
  // Converto il valore dell'input da stringa a numero
  const valore = parseInt($('.iva input').value);
  // .toFixed() limita i numeri dopo la virgola
  $('.iva label').innerHTML = aggiungiIva(valore).toFixed(2);
}

// Aggancio una funzione all'evento click sul pulsante
$('.iva button').addEventListener('click', calcola);
// Aggancio una funzione all'evento change dell'input numerico
$('.iva input').addEventListener('change', calcola);