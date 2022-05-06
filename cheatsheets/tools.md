# Guida rapida ai comandi CLI usati nel corso

| Git                      |                                                                     |
| ------------------------ | ------------------------------------------------------------------- |
| git --version            | versione Git installata                                             |
| git clone [*url repo*]   | copia un repositor remoto (non solo da GitHub) sul proprio computer |
| git clone [*url repo*] . | come sopra ma copia il contenuto nella cartella attuale             |

| NodeJS           |                                                |
| ---------------- | ---------------------------------------------- |
| node --version   | versione NodeJS installata                     |
| node             | avvia la REPL interattiva                      |
| node [*file.js*] | esegue un file Javascript nell'ambiente NodeJS |

| NPM (5+)                        |                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------- |
| npm install                     | installa tutti i moduli specificati in un package.json                        |
| npm install [modulo]            | installa un modulo e lo registra come dipendenza nel package.json             |
| npm uninstall [modulo]          | disinstalla un modulo e lo rimuove come dipendenza nel package.json           |
| npm install [modulo] --save-dev | installa un modulo e lo registra come dipendenza di sviluppo nel package.json |
| npm init                        | avvia il wizard per la creazione del file package.json                        |
| npm init -y                     | come sopra ma usa in automatico tutti i valori di default                     |
