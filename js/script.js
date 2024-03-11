/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


//dichiaro variabile button e la seleziono dall'html tramite la classe .btn
let button = document.querySelector(".btn"); 
//console.log(button);

//aggiungo ascoltatore al click per il bottone
button.addEventListener("click", function () {
  //console.log('Hai cliccato il bottone');

  //estraggo il valore inserito dall'utente tramite l'id associato nell'HTML
  let useremail = document.getElementById("userEmail").value;
  //console.log(useremail);
  let emailCheck = true;

  //definisco la variabile emails creando un ARRAY
  let emails = [
    useremail,
    "esempio2@gmail.com",
    "esempio3@gmail.com",
  ];

  for (let i = 0; i < emails.length; i++) {
    console.log(emails[i]);
    if(emails === true){
        console.log(emails, 'Benvenuto');
    }
    else(emails === false) 
        console.log('Devi registrarti per accedere');
    }
});

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/
