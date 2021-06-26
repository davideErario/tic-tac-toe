const slots = document.querySelectorAll(".slots");

const slot1 = document.querySelector(".slot1");
const slot2 = document.querySelector(".slot2");
const slot3 = document.querySelector(".slot3");
const slot4 = document.querySelector(".slot4");
const slot5 = document.querySelector(".slot5");
const slot6 = document.querySelector(".slot6");
const slot7 = document.querySelector(".slot7");
const slot8 = document.querySelector(".slot8");
const slot9 = document.querySelector(".slot9");

const scoreboardX = document.querySelector(".scoreboard-px");
let pointX = 0;
const scoreboardO = document.querySelector(".scoreboard-po");
let pointO = 0;

const button = document.querySelector(".buttonChangePlayer");

let firstPlayer = true;

function checkSlot() {
    if (this.classList.contains("checked-x")) {
        return;
    } else if (this.classList.contains("checked-o")) {
        return;
    } else {
        if (firstPlayer) {
            this.classList.add("checked-x");
            this.innerHTML = "X";
            firstPlayer = !firstPlayer;
            checkWin();
        } else {
            this.classList.add("checked-o");
            this.innerHTML = "O";
            firstPlayer = !firstPlayer;
            checkWin();
        }
    }
}

function checkWin() {
    if ((slot1.classList.contains("checked-x") && slot2.classList.contains("checked-x") && slot3.classList.contains("checked-x"))
        || (slot1.classList.contains("checked-x") && slot5.classList.contains("checked-x") && slot9.classList.contains("checked-x"))
        || (slot1.classList.contains("checked-x") && slot4.classList.contains("checked-x") && slot7.classList.contains("checked-x"))
        || (slot3.classList.contains("checked-x") && slot5.classList.contains("checked-x") && slot7.classList.contains("checked-x"))
        || (slot4.classList.contains("checked-x") && slot5.classList.contains("checked-x") && slot6.classList.contains("checked-x"))
        || (slot7.classList.contains("checked-x") && slot8.classList.contains("checked-x") && slot9.classList.contains("checked-x"))
        || (slot2.classList.contains("checked-x") && slot5.classList.contains("checked-x") && slot8.classList.contains("checked-x"))
        || (slot3.classList.contains("checked-x") && slot6.classList.contains("checked-x") && slot9.classList.contains("checked-x"))) {
        pointX++;
        scoreboardX.innerHTML = pointX;
        resetGame();
    } else if ((slot1.classList.contains("checked-o") && slot2.classList.contains("checked-o") && slot3.classList.contains("checked-o"))
        || (slot1.classList.contains("checked-o") && slot5.classList.contains("checked-o") && slot9.classList.contains("checked-o"))
        || (slot1.classList.contains("checked-o") && slot4.classList.contains("checked-o") && slot7.classList.contains("checked-o"))
        || (slot3.classList.contains("checked-o") && slot5.classList.contains("checked-o") && slot7.classList.contains("checked-o"))
        || (slot4.classList.contains("checked-o") && slot5.classList.contains("checked-o") && slot6.classList.contains("checked-o"))
        || (slot7.classList.contains("checked-o") && slot8.classList.contains("checked-o") && slot9.classList.contains("checked-o"))
        || (slot2.classList.contains("checked-o") && slot5.classList.contains("checked-o") && slot8.classList.contains("checked-o"))
        || (slot3.classList.contains("checked-o") && slot6.classList.contains("checked-o") && slot9.classList.contains("checked-o"))) {
        pointO++;
        scoreboardO.innerHTML = pointO;
        resetGame();
    }
}

function changePlayer() {
    if (firstPlayer) {
        firstPlayer = !firstPlayer;
        button.innerHTML = "Start with Player X";
    } else {
        firstPlayer = !firstPlayer;
        button.innerHTML = "Start with Player O";
    }
}

slots.forEach(slot => slot.addEventListener("click", () => {
    button.classList.add("midgame-button");
}));

function resetGame() {
    firstPlayer = true;
    slots.forEach(slot => {
        slot.classList.remove("checked-x");
        slot.classList.remove("checked-o");
        slot.innerHTML = "";
    });
    button.classList.remove("midgame-button");
    button.innerHTML = "Start with Player O";
}

slots.forEach(slot => slot.addEventListener("click", checkSlot));