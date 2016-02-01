// Costanti
const cambiami = 0;

// Variabili contestualizzate
let test = 1;

// Assegnazione rapida di valori multipli
let [a,b,c] = [1,2,3];
console.log('Valori di a,b,c:',a,b,c);

// Stringhe intelligenti
var nome = 'Jeeg';
console.log(`Sono un roboto mi chiamo ${nome}!`);

// Classi
class Cliccatore{

  // Funzione che parte subito quando la classe è istanziata
  constructor(nome){
    this.name = nome ? nome : 'Bob';
    console.log(`Classe ${this.name} istanziata!`);
  }

  noContesto(){
    setTimeout(function(){
      // Non uscirà il nome
      console.log(`Hai cliccato ${this.name}...`);
    },100);
  }

  contestoES5(){
    setTimeout(function(){
      // Leggo il contesto dall'oggetto padre (la classe)
      console.log(`Hai cliccato ${this.name}...`);
    }.bind(this),100);
  }

  contestoES6(){
    // Arrow function: più breve e mantiene il contesto
    setTimeout(() => {
      console.log(`Hai cliccato ${this.name}...`);
    },100);
  }

}

var istanza = new Cliccatore();
var istanza2 = new Cliccatore('Jason');
