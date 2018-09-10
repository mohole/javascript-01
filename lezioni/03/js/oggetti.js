// Oggetto vuoto
const vuoto = {};

// Oggetto con proprietà
const band = {
  nome: 'Beatles',
  componenti: 4
}

// Aggiungo prorietà a un oggetto
band.genere = 'Pop, rock';
band.like = true;

// Elimino proprietà da un oggetto
delete band.like;

// Aggiungo array come proprietà
band.album = ['Help', 'One', 'Sgt. Pepper', 'Let it be'];

// Array di oggetti
const starwars = [
  {
    title: 'La minaccia Fantasma',
    year: 1999,
    chronoOrder: 1,
    pubOrder: 4
  },{
    title: 'L\'attacco dei cloni',
    year: 2002,
    chronoOrder: 2,
    pubOrder: 5
  },{
    title: 'La vendetta dei Sith',
    year: 2005,
    chronoOrder: 3,
    pubOrder: 6
  },{
    title: 'Una nuova speranza',
    year: 1977,
    chronoOrder: 4,
    pubOrder: 1
  },{
    title: 'L\'impero colpisce ancora',
    year: 1980,
    chronoOrder: 5,
    pubOrder: 2
  },{
    title: 'Il ritorno dello Jedi',
    year: 1983,
    chronoOrder: 6,
    pubOrder: 3
  },{
    title: 'Il risveglio della forza',
    year: 2015,
    chronoOrder: 7,
    pubOrder: 7
  }
];

// Metodo sort per ordinare gli array
const byYear = starwars.sort((a,b) => {
  return a.year - b.year;
});

// Utility per ordinare array di oggetti per attributi
const ordina = (attr) => {
  return starwars.sort((a,b) => {
    return a[attr] - b[attr];
  });
}