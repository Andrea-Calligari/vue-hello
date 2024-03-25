 # # VUE
 VUE é un framework open-source di JS il quale crea interfacce utente reattive e dinamiche permettendo di creare componenti riutilizzabili.

Le due caratteristiche principali sono:
- Rendering dichiarativo: Vue estende l'HTML standard con un modello di sintassi che permette di descrivere in modo DICHIARATIVO l' output dell' HTML basato sullo stato JS

- Reattivita': il framework traccia automaticamente i cambiamenti nello stato JS ed aggiorna in modo efficiente il DOM quando avvengono modifiche.

Vue è un framework flessibile e adattabile che copre molte funzionalità comuni nello sviluppo frontend. Può essere utilizzato in diversi modi, come migliorare l'HTML statico, incorporare componenti web, creare single-page applications, applicazioni fullstack, siti statici e molto altro. 

## SINGLE-FILE
Nella maggior parte dei progetti Vue abilitati con lo strumento di build, scriviamo i componenti Vue utilizzando un formato di file simile a HTML chiamato Single-File Component.

## API 
I componenti di Vue possono essere scritti in due stili di API differenti:

- Options API  
 
    -  Con l'API delle Opzioni, definiamo la logica di un componente utilizzando un oggetto di opzioni come data, methods e mounted. Le proprietà definite dalle opzioni sono esposte all'interno delle funzioni tramite this, che si riferisce all'istanza del componente.

- Composition API 
    - Con la Composition API, definiamo la logica di un componente utilizzando le funzioni API . Negli SFC, la Composition API viene tipicamente utilizzata con un < script set up > L'attributo setup è un suggerimento che fa sì che Vue esegua trasformazioni in fase di compilazione che ci permettono di utilizzare la Composition API con meno codice di base. Ad esempio, gli import e le variabili / funzioni di livello superiore dichiarati in < script setup > sono direttamente utilizzabili nel template.

#

## TEMPLATE SYNTAX
Vue utilizza una sintassi basata su modelli HTML che ti permette di legare declarativamente il DOM renderizzato ai dati sottostanti dell'istanza del componente. 
otto il cofano, Vue compila i modelli in codice JavaScript altamente ottimizzato. Combinato con il sistema di reattività, Vue può intelligentemente capire il numero minimo di componenti da ridisegnare e applicare la quantità minima di manipolazioni del DOM quando lo stato dell'app cambia.