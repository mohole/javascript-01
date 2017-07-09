// Definisco una funzione
function test(){
  console.log('faccio qualcosa...');
}

// Invoco la funzione
test();


// Funzione con argomento
function saluta(nome){
  // "nome" è come una variabile ma esiste solo all'interno di questa funzione
  console.log('Bella lì ' + nome + "!");    // Concatenzione
  console.log(`Tutto rego ${nome}?`);       // ES2015 Template strings
}

saluta('Salvo');
saluta('fratello');


// Funzione che restituisce un valore
function aggiungiIva(valore,iva){
  // Operatore ternario per controllare valore argomenti e definire dei default
  valore = !valore ? 0 : valore;
  iva = !iva ? 23 : iva;
  // Possiamo definire espressioni matematiche, ma solo con le tonde!
  const totale = valore + ((valore / 100) * iva);
  // Porto il valore fuori dalla funzione
  return totale;
}

aggiungiIva(200);
aggiungiIva(100,18);