'use strict';

// Evitare il più possibile la mutazione diretta dei valori

// Oggetto "magazzino"
const store = {
  // Ritorno il valore dei dati
  get: () => this._data,
  // Passo il valore che sovrascrive i dati precedentemente memorizzati
  set: data => this._data = data.slice()
};

console.log(store.get());          // undefined

const allievi = ['tizio', 'caio'];
store.set(allievi);

console.log(store.get());          // ['tizio','caio']