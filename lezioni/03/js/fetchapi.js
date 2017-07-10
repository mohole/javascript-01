const url = "http://jsonplaceholder.typicode.com/users/1";

console.warn('Chiamata iniziata...');
// Avvio (semplice)
fetch(url)
  // Quando la promise è pronta
  .then((resp) => {
    console.log(resp);
    // Trasformo il body in JSON e passo alla prossima funzione
    return resp.json();
  })
  // Ricevo un oggetto Javascript pultio
  .then((data) => {
    console.warn('Chiamata completata');
    console.log(data);
    const str = JSON.stringify(data,null,2);
    document.querySelector('pre').innerHTML = str;
  });