// Variabili globali
const search = document.querySelector('#search');
const results = document.querySelector('#results');
const cancel = document.querySelector('#cancel');
const tmpl = document.querySelector('#tmpl');
const url = 'http://jsonplaceholder.typicode.com/posts';

const store = { 
    get: () => this._data,
    set: data => this._data = data.slice() 
 };

cancel.addEventListener('click', (evt) => {
  search.value = '';
  render(store.get());
});

// Evento alla pressione di un qualunque tasto su un elemento
search.addEventListener('keyup', (evt) => {
  console.log(search.value);
  const query = search.value;
  // Credo un filtro cercando il valore sia nel title che nel body
  // di ogni elemento dell'array
  const filtered = store.get().filter((obj) => {
    const title = obj.title.search(query);
    const body = obj.body.search(query);
    return title > -1 || body > -1;
  });
  render(filtered);
});

// Disegna i template nella pagina in base a un dato array
function render(collection){
  // Svuoto il contenitore dei risultati
  results.innerHTML = '';
  /*
  Lo ripopolo usando l'array passato come "collection"
  Per ogni elemento creo una copia del template e sostituisco
  i segnaposti con i valori reali del singolo elemento.
  */
  collection.forEach((e,i) => {
    const clone = document.importNode(tmpl,true);
    const elem = clone.innerHTML
                          .replace('{{title}}', e.title)
                          .replace('{{body}}', e.body);
    results.innerHTML += elem;
  });
}

// Chiamata dati server
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    store.set(data);
    render(store.get());
  })
