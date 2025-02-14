const guestList = ["paolo@gmail.com", "Luca@gmail.com", "john@gmail.com", "kurt@gmail.com"];
const userMail = prompt("Inserisci la tua e-mail per verificare l'accesso");
console.log(guestList, userMail);

let canAccess = false;

for (let index = 0; index < guestList.length; index++) {
    let thisGuest = guestList[index];
    if (thisGuest === userMail) {
        canAccess = true;
        break;
    }
}

if (canAccess) {
    console.log("Welcome to the party");
} else {
    console.log("message");
}


