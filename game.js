import { Turnos } from "./turnos.js";

const container = document.querySelector(".container");
container.style.backgroundColor = "blue";

const game = new Turnos();

for (let i = 0; i < 9; i++){
    let casilla = document.createElement("div");
    casilla.classList.add("casilla");
    casilla.dataset.pos = i;
    container.appendChild(casilla);
}
const casillas = document.querySelectorAll(".casilla");

casillas.forEach(c => {
    c.addEventListener("click",handler)
})

function handler(event){
    game.play(event.target.dataset.pos);
    game.board.displayBoard();
}