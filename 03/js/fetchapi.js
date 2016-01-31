var url = "http://api.openweathermap.org/data/2.5/forecast?q=milano,it&units=metric&mode=json&appid=44db6a862fba0b067b1930da0d769e98";

console.warn('Chiamata iniziata...');
// Avvio (semplice)
fetch(url)
  // Quando la promise è pronta
  .then(function(resp){
    console.log(resp);
    // Trasformo il body in JSON e passo alla prossima funzione
    return resp.json();
  })
  // Ricevo un oggetto Javascript pultio
  .then(function(data){
    console.warn('Chiamata completata');
    console.log(data);
    var temp = Math.ceil(data.list[0].main.temp);
    document.querySelector('#temp').innerHTML = temp;
  });
