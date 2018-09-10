// Array di oggetti
const starwars = [
  {
    title: "The Phantom Menace",
    year: 1999,
    order: 1
  },{
    title: "Attack of the clones",
    year: 2002,
    order: 2
  },{
    title: "The revenge of the Sith",
    year: 2005,
    order: 3
  },{
    title: "A new hope",
    year: 1977,
    order: 4
  },{
    title: "The Empire strickes back",
    year: 1980,
    order: 5
  },{
    title: "The return of the Jedi",
    year: 1983,
    order: 6
  },{
    title: "The force awakens",
    year: 2015,
    order: 7
  },{
    title: "The last jedi",
    year: 2017,
    order: 8
  }

]


// Seleziono la lista nella pagina
const list = document.querySelector('#list');

// Filtro con solo il film del 1980
const singolo = starwars.filter((obj) => {
  return obj.year === 1980;
});

// Filtro con solo film del 1980 e 2015
// && = AND
// || = OR
const coppia = starwars.filter((obj) => {
  return obj.year === 1980 || obj.year === 2015;
});

// Filtro con tutti i film che iniziano per 't'
const letteraT = starwars.filter((obj) => {
  return obj.title.charAt(0).toLowerCase() === 't' ;
});


// Disegno dei tag <li> per ogni elemento nell'array
// e li aggiungo nella lista
const render = (myarray) => {
  list.innerHTML = '';

  myarray.forEach((elem,index) => {
    // console.log(elem,index);
    list.innerHTML += '<li><b>' + elem.title + '</b></li>';
  });
}

// Primo render di tutta la collezione
render(starwars);