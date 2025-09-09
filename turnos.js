import { Board } from "./board.js";


export class Turnos{
    constructor(){
        this.turno = "jugador";
        this.board = new Board();
        this.win = false;
    }
    play(pos){
        if (!this.win){
        let currentMarker = this.turno == "jugador" ? "x" : "o";
        if (this.board.addMarker(pos,currentMarker)) {
            if (this.board.checkWin(currentMarker)){this.win = true; return}
            this.turnoToggle();
            
            return true;}
        return false;}
    }

    turnoToggle(){
       this.turno = this.turno === "jugador" ?  "enemigo" : "jugador";
    }

}

