// Definisco la classe
// - variabili -> proprietà
// - funzioni -> metodi
class ToDoList {

  // Metodo che viene avviato automaticamente all'iniziliazzazione della classe
  constructor(){
    console.log('Classe inizializzata');

    this.API = "http://jsonplaceholder.typicode.com/todos";
    this.data = [];
    this.table = document.querySelector('table');
    this.template = document.querySelector('#task-template');

    this._getServerData();
  }

  // Aggiunta di una task
  addItem(evt){
    let input = evt.target;
    if(evt.keyCode === 13){
      let newTask = {
        id: (this.data.length + 1),
        title: input.value,
        completed: false
      };
      this.data.push(newTask);
      input.value = null;
      console.log('Invio premuto', this.data);
      this._renderTasks();
    }
  }

  // Rimozione di una tasks
  removeItem(evt){
    let n = parseInt(evt.currentTarget.dataset.index);
    this.data.splice(n,1);
    this._renderTasks();
  }

  // Visualizzo i dati nell'applicazione
  _renderTasks(){
    let source = this.template.innerHTML;
    let template = Handlebars.compile(source);
    this.table.innerHTML = template({tasks: this.data});
  }

  // Richiamo dati remoti
  _getServerData(){
    console.log('Richiama dati...');
    fetch(this.API)
      .then((raw) => {
        return raw.json();
      })
      .then((response) => {
        console.log('Caricato:',response);
        this.data = response.slice(0,5);
        this._renderTasks();
      });
  }

}

// Attendo il caricamento del DOM
document.addEventListener('DOMContentLoaded', () => {
  // Istanziamo la classe
  window.app = new ToDoList();
});
