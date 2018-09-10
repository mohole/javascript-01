
$('.stile1').addEventListener('click', (evt) => {
  // Aggiungo una classe
  $('.stile1').classList.add('btn-primary');
  $('.stile1').classList.remove('btn-secondary');
})

// Selezioni tutti gli elementi trovati dal selettore
const btns = document.querySelectorAll('.stile2');

const alternaClasse = (evt) => {
  console.log(evt);
  // Individuo il bersaglio dell'evento e manipolo le sue classi
  evt.target.classList.toggle('btn-primary');
  evt.target.classList.toggle('btn-secondary');
}

// Itero gli elementi selezionati
btns.forEach((elem) => {
  // Aggancio un evento a ognuno
  elem.addEventListener('click', alternaClasse);
});

$('.stile3').addEventListener('click', (evt) => {
  // Controllo se l'elemento contiene una classe
  const check = evt.target.classList.contains('btn-primary');
  console.log('classlist.contains()', check);
  // Condizione
  if(check){
    console.warn('E\' un pulsante primary!');
  } else {
    console.warn('NON è un pulsante primary!');
  }
});


const muoviOggetto = (evt) => {
  evt.target.classList.toggle('muovi');
};

const usaAnimate = (evt) => {
  evt.target.classList.toggle('rubberBand');
}