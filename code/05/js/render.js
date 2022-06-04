/**
 * Disegna un array di dati all'interno di un nodo HTML
 * @param {Array} source Array sorgente da trasformare
 * @param {HTMLElement} container Nodo HTML nel quasi disegnare i dati
 */
const render = (source, container) => {
  // Creo un nuovo array di stringhe HTML rimodellando l'array di dati JSON
  // .map() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  const element = source.map((contact) => {
    return `<li class="my-2">${contact.name} <span class="font-bold">${contact.phone}</span></li>`;
  });

  // Unisco l'array di stringhe in un'unica stringa prima di renderizzare
  // .join() -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  container.innerHTML = element.join("");
};

// Esportazione per moduli JS
export { render };
