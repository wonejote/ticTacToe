import { Board } from "./board.js";


export class Turnos{
    constructor(){
        this.turno = "jugador";
        this.board = new Board();
        this.win = false;
        this.currentMarker = "";
        
    }
    play(pos){
        {
         this.currentMarker = this.turno == "jugador" ? "x" : "o";
        if (this.board.addMarker(pos,this.currentMarker)) {
            if (this.board.checkWin(this.currentMarker)){this.win = true;}
            this.turnoToggle();
            
            return true;}
        return false;}
    }

    turnoToggle(){
       this.turno = this.turno === "jugador" ?  "enemigo" : "jugador";
    }

}

