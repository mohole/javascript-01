'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Costanti
var cambiami = 0;

// Variabili contestualizzate
var test = 1;

// Assegnazione rapida di valori multipli
var a = 1;
var b = 2;
var c = 3;

console.log('Valori di a,b,c:', a, b, c);

// Stringhe intelligenti
var nome = 'Jeeg';
console.log('Sono un roboto mi chiamo ' + nome + '!');

// Classi

var Cliccatore = function () {

  // Funzione che parte subito quando la classe è istanziata

  function Cliccatore(nome) {
    _classCallCheck(this, Cliccatore);

    this.name = nome ? nome : 'Bob';
    console.log('Classe ' + this.name + ' istanziata!');
  }

  _createClass(Cliccatore, [{
    key: 'noContesto',
    value: function noContesto() {
      setTimeout(function () {
        // Non uscirà il nome
        console.log('Hai cliccato ' + this.name + '...');
      }, 100);
    }
  }, {
    key: 'contestoES5',
    value: function contestoES5() {
      setTimeout(function () {
        // Leggo il contesto dall'oggetto padre (la classe)
        console.log('Hai cliccato ' + this.name + '...');
      }.bind(this), 100);
    }
  }, {
    key: 'contestoES6',
    value: function contestoES6() {
      var _this = this;

      // Arrow function: più breve e mantiene il contesto
      setTimeout(function () {
        console.log('Hai cliccato ' + _this.name + '...');
      }, 100);
    }
  }]);

  return Cliccatore;
}();

var istanza = new Cliccatore();
var istanza2 = new Cliccatore('Jason');
