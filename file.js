let invitati = ["paolo@gmail.com","Luca@gmail.com", "john@gmail.com","kurt@gmail.com"];
let mail = prompt("Inserisci la tua e-mail per verificare l'accesso") 

for (let i = 0; i< lista.length; i++) {
    if (lista[i] === invitati ) {trovato = true
        break;
    }
}
if (trovato) {
    console.log ("Accesso consentito!");
}
else {console.log("Accesso non consentito")}

