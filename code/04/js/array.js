
/*
CREAZIONE
*/

// Creazione array | i due metodi danno lo stesso risultato
const metodo1 = [];
const metodo2 = new Array();

// Creo array con contenuto
const robot = ['mazinga','goldrake','jeeg'];
// I valori possono anche essere di tipo diverso
const casuale = ['ciao', 42, true];


/*
METODI CON MUTAZIONE
*/
console.log( robot[0] );    // stampa 'tiziano' in console
robot[0] = 'eva-01';   // modifico il primo elemento

console.log( robot.length ); // Resituisce il numero di elementi nell'array

// Aggiungo elemento in fondo all'array
robot.push('voltron 5');

// Rimuovo l'ultimo elemento
robot.pop();

/*
METODI IMMUTABILI
*/

const hobbits = ['Frodo',' Sam', 'Marry', 'Pipino'];
const umani = ['Aragorn', 'Boromir'];
const altri = ['Legolas', 'Gimli', 'Gandalf'];

// non è una copia...
const allaFine = umani;
allaFine[1] = 'Boromir - deceduto';
console.log(umani, allaFine);

// vera copia
const hobbits2 = hobbits.slice();
hobbits2.pop();
console.log(hobbits, hobbits2);

// unione più array
const compagnia = hobbits.concat(umani,altri);
console.log(compagnia);

// rimozione elemento
const sopravvissuti = compagnia.filter((e,i) => {
  return e !== allaFine[1];
});
console.log(sopravvissuti, compagnia);


// Documentazione MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array