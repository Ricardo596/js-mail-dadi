const playNumber = Math.ceil(Math.random() * 6);
const pcNumber = Math.ceil(Math.random() * 6);
console.log(playNumber, pcNumber);

if (playNumber > pcNumber) {
    alert("player wins");
} else if (playNumber < pcNumber) {
    alert("pc wins");
} else {
    alert("Try again");
}