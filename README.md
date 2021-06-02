# angular-ssw-project-newservice

Ogni Post-It è un'istanza della classe 'Post', i quali comprendono titolo, contenuto e un check(boolean) per contrassegnare il Post-It come 'importante'. I Post-It sono raggruppati all'interno di un array ('postIt').

Oltre all'app.component sono presenti due child component: new-post.component e showpost.component. Newpost.component è responsabile della parte di inserimento del Post-It, showpost.component si occupa di mostrare il contenuto del Post-It quando cliccato, della sua chiusura e della sua eliminazione.

Per la visualizzazione dei Post-It contrassegnati come importanti viene utilizzata la proprietà 'importantSelector' della classe 'AppComponent', inizializzata a false per mostrare tutti i post e successivamente impostata a true se premuto il bottone 'Solo Post-It importanti'.

Per l'eliminazione dei Post-It viene utilizzato il metodo 'delete()' contenuto all'interno di showpost.component. Al suo interno viene utilizzato il metodo 'splice()' per rimuovere il Post-It selezionato all'interno dell'array 'postIt'. All'interno del metodo splice viene utilizzato il metodo 'findIndex()' per trovare l'indice del Post-It che si vuole eliminare all'interno dell'array. Una volta completata l'eliminazione viene chiamato il metodo 'setData()' presente all'interno del service 'keyvalue.service', per caricare l'array aggiornato sul servizio.

Se non si dispone di una chiave per usufruire del servizio keyvalue, si può richiedere attraverso il bottone 'Ottieni Chiave'. Viene fatta una richiesta al servizio, ottenuta la chiave, salvata all'interno della classe 'AppComponent' nella proprietà 'apikey' e viene caricato sul servizio l'array 'postIt', in quel momento vuoto.

Se si dispone della chiave invece basta inserirla nel campo appostito e premere il bottone 'Inserisci', il quale chiama il metodo 'setKey()' che salva il valore della chiave all'interno del component App e sul servizio keyvalue. Successivamente vengono scaricati tutti i Post-It presenti sotto quella chiave.
Se si inserisce una chiave non valida, al momento di scaricare i Post-It presenti sulla chiave verrà presentato un errore e la proprietà 'apikey' verrà impostata a valore undefined. Di conseguenza verrà nascosta la parte di visualizzazione dei Post-It e verrà mostrata la parte iniziale dell'app corrispondente all'inserimento/ottenimento di una chiave.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ssw-project-newservice)