// Oggetto per dialogare con il server
var Server = {
  // Url principale
  url: 'http://localhost:8081/roba',
  // Utility per parsare le risposte in JSON
  parse: function(response){
    return response.json();
  },
  // Metodo che mi ritorna i dati di una chiamata in GET
  getData: function(){
    return fetch(this.url,{
      method: 'get'  // valore di default
    }).then(this.parse);
  },
  postData: function(text){
    return fetch(this.url,{
      method: 'post',
      body: text
    }).then(this.parse);
  }
}

// Leggo i dati dal server e creo gli elementi nel DOM
function getting(){
  var lista = document.querySelector('#lista');
  // Svuota il contenuto della lista (per non duplicare)
  lista.innerHTML = '';
  Server.getData().then(function(data){
    // Ciclo for
    for(var i = 0; i < data.length; i++){
      // Credo un elemento HTML via Javascript
      var elem = document.createElement('li');
      elem.innerHTML = data[i];
      // Lo aggiungo in un nodo del DOM
      lista.appendChild(elem);
    }
  });
}

// Aggiungo un nuovo elemento e aggiorno la lista
function aggiungi(evt){
  var input = evt.target;
  // Controllo se il tasto premuto è INVIO
  if(evt.keyCode === 13){
    // Passo i dati al server
    Server.postData(input.value).then(function(){
      // Resetto l'input e ricarico i dati
      input.value = null;
      getting();
    })
  }
}

// Inizialiazzo
getting();
document.querySelector('#input').addEventListener('keyup', aggiungi);
