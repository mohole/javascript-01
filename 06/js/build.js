// Definisco la classe
// - variabili -> proprietà
// - funzioni -> metodi
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ToDoList = (function () {

  // Metodo che viene avviato automaticamente all'iniziliazzazione della classe

  function ToDoList() {
    _classCallCheck(this, ToDoList);

    console.log('Classe inizializzata');

    this.API = "http://jsonplaceholder.typicode.com/todos";
    this.data = [];
    this.table = document.querySelector('table');
    this.template = document.querySelector('#task-template');

    this._getServerData();
  }

  // Attendo il caricamento del DOM

  // Aggiunta di una task

  _createClass(ToDoList, [{
    key: 'addItem',
    value: function addItem(evt) {
      var input = evt.target;
      if (evt.keyCode === 13) {
        var newTask = {
          id: this.data.length + 1,
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
  }, {
    key: 'removeItem',
    value: function removeItem(evt) {
      var n = parseInt(evt.currentTarget.dataset.index);
      this.data.splice(n, 1);
      this._renderTasks();
    }

    // Visualizzo i dati nell'applicazione
  }, {
    key: '_renderTasks',
    value: function _renderTasks() {
      var source = this.template.innerHTML;
      var template = Handlebars.compile(source);
      this.table.innerHTML = template({ tasks: this.data });
    }

    // Richiamo dati remoti
  }, {
    key: '_getServerData',
    value: function _getServerData() {
      var _this = this;

      console.log('Richiama dati...');
      fetch(this.API).then(function (raw) {
        return raw.json();
      }).then(function (response) {
        console.log('Caricato:', response);
        _this.data = response.slice(0, 5);
        _this._renderTasks();
      });
    }
  }]);

  return ToDoList;
})();

document.addEventListener('DOMContentLoaded', function () {
  // Istanziamo la classe
  window.app = new ToDoList();
});
