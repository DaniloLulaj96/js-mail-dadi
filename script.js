/*
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/


//creo array di indirizzi mail autorizzati all'accesso
const mail = ['dani@gmail.com', 'dani@libero.it', 'dani@virgilio.it']

//mando in console la lista array
for (let i = 0; i < mail.length; i++) {
    const element = mail[i];
    console.log(element)
}


//creo variabile e prompt dove chiedo mail all'utente
const user = prompt('digita la tua mail')


//controllo che la mail inserita dall'utente sia nella lista array scritta precedentemente
if(mail.includes(user)){
    //se l'accesso viene eseguito allora creiamo due variabili una per l'utente e un altra per il pc che creano due numeri casuali

    const user_number = Math.floor(Math.random() *6 +1)
    console.log(user_number)

    const pc_number = Math.floor(Math.random() *6 +1)
    console.log(pc_number)


    //se il numero dell'utente è più grande
    if(user_number > pc_number){
        alert(`HAI VINTO!\nIl tuo numero estratto è ${user_number}, mentre quello del computer è ${pc_number}.`)
    }

    //se il numero del pc è più grande
    else if (user_number < pc_number){
        alert(`HAI PERSO!\nIl tuo numero estratto è ${user_number}}, mentre quello del computer è ${pc_number}.`)
    }

    //se i numeri sono pari
    else {
        alert(`HAI PAREGGIATO!\nIl tuo numero estratto è ${user_number}, mentre quello del computer è ${pc_number}.`)
    }

}
       


    else{
    //se l'accesso non viene eseguito
    alert('Accesso Negato')
    alert('premi F5 per ricaricare la pagina')}
