// Mini utility per velocizzare selezioni nel DOM
function $(selector){
  return document.querySelector(selector);
}

// Aggancio una funzione all'evento click sul pulsante
$('.iva button').addEventListener('click', calcola);
$('.iva input').addEventListener('change', calcola);

function calcola(evt){
  // Blocco l'evento di default (submit)
  evt.preventDefault();
  // Converto il valore dell'input da stringa a numero
  var valore = parseInt($('.iva input').value);
  // .toFixed() limita i numeri dopo la virgola
  $('.iva label').innerHTML = aggiungiIva(valore).toFixed(2);
}
