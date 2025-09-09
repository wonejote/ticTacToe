import { Turnos } from "./turnos.js";

const container = document.querySelector(".container");
const contadorJugador1GUI = document.querySelector(".contadorJugador1");
const contadorJugador2GUI = document.querySelector(".contadorJugador2");
let contador1 = 0;
let contador2 = 0;

let game = new Turnos();

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
    if (!game.win) {
        if (game.play(event.target.dataset.pos)) {
            event.target.classList.add(game.currentMarker);

            if (game.win) {
                actualizarContador(game.currentMarker);
            }
        }
    }
}

function actualizarContador(){
    game.currentMarker == "x" ? contador1++ : contador2++;
    contadorJugador1GUI.innerText = contador1;
    contadorJugador2GUI.innerText = contador2;
}
//----------------------
const boton = document.querySelector("button");
boton.addEventListener("click",()=>{
    game = new Turnos();
    casillas.forEach(c => c.className = "casilla");
})