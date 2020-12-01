// Posticipa l'esecuzione del codice fino al caricamento completo della pagina
document.addEventListener('DOMContentLoaded', function(){

  // Seleziono il primo tag H1 e cambio il colore del testo
  document.querySelector('h1').style.color = '#ff0000';

  // Seleziono l'elemento con ID 'testo' e modifico il suo contenuto
  document.querySelector('#testo').innerHTML = 'Grandemagoooooooo';

  // Seleziona tutti i tag P e crea un array di risultati
  document.querySelectorAll('p');

  // Memorizzo la selezione
  const paragrafi = document.querySelectorAll('p');

  // Ripeto una funzione per ogni elemento all'interno dell'array
  // La funzion riceve come argomenti
  // - l'elemento attuale dell'iterazione
  // - l'indice dell'iterazione
  paragrafi.forEach( (element,index) => {
      element.innerHTML = 'Sono il paragrafo con indice ' + index;
  } );

  // DOCUMENTAZIONE .querySelector() + .querySelectorAll
  // https://developer.mozilla.org/it/docs/Web/API/Document/querySelector
  // https://developer.mozilla.org/it/docs/Web/API/Document/querySelectorAll

  // DOCUMENTAZIONE + POLYFILL .forEach()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

});