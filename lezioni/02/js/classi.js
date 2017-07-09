
$('.stile1').addEventListener('click', function(evt){
  // Aggiungo una classe
  $('.stile1').classList.add('btn-primary');
  $('.stile1').classList.remove('btn-secondary');
})

// Selezioni tutti gli elementi trovati dal selettore
const btns = document.querySelectorAll('.stile2');

// Itero gli elementi selezionati
btns.forEach(function(elem){
  // Aggancio un evento a ognuno
  elem.addEventListener('click', alternaClasse);
});

function alternaClasse(evt){
  console.log(evt);
  // Individuo il bersaglio dell'evento e manipolo le sue classi
  evt.target.classList.toggle('btn-primary');
  evt.target.classList.toggle('btn-secondary');
}

$('.stile3').addEventListener('click', function(evt){
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


function muoviOggetto(evt){
  evt.target.classList.toggle('muovi');
};

function usaAnimate(evt){
  evt.target.classList.toggle('rubberBand');
}