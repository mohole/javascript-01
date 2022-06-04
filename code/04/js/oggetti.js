
// Creo un nuovo oggetto
const metodo1 = {};
const metodo2 = new Object();

// Creo un oggetto con dei valori
const film = {
  titolo: 'Deadpool',
  anno: 2016,
  durata: "120min",
  like: false
}

console.log( film.titolo ); // Restitutisce la properità titolo

// Modifico le proprietà di un oggetto
film.titolo = 'Il caso spotlight';
film.like = true;

// Se setto una proprietà inesistente viene creata ala momento
film.voto = 8;

// Oggetti annidati
const corso = {
  nome: 'Javascript 1',
  allievi: ['tizo', 'caio', 'bruto'],
  info: {
    orario: 'serale',
    aula: 'sbarbaro'
  }
}

// referenza
const corso2 = corso;
corso2.iscritti = corso.allievi.length;
console.log(corso2, corso);

// modifica immutabile
const aggiornamento = Object.assign({}, corso, {nome: 'Rocket JS science!', livello: 1});
console.log(aggiornamento, corso);

// Documentazione MDN
// https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Object