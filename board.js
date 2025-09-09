export class Board{
    constructor(){
        this.boardArr = Array(9).fill(0);
     
    }
    displayBoard(){
        for (let i = 0; i < 3; i++){
            console.log(this.boardArr.slice(3*i,(3*i)+3).join(""));
        }
    }
    addMarker(pos,marker){
        if (this.boardArr[pos] !== 0){return false;}
        this.boardArr[pos] = marker;
        return true;
    }
    checkWin(marker){
        let arrWin = [marker,marker,marker];
        for (let i = 0; i < 3; i++){
            let arrRow = this.boardArr.slice(3*i,3*i + 3);
            let arrColum = [this.boardArr[i],this.boardArr[i + 3],this.boardArr[i + 6]];
        if (arraysIguales(arrRow,arrWin)){console.log(marker +" gana en fila " );return true;}
            
        if (arraysIguales(arrColum,arrWin)){console.log(marker + "gana en columna");return true;}}
        let diag1 = [this.boardArr[0],this.boardArr[4],this.boardArr[8]];
        let diag2 = [this.boardArr[2],this.boardArr[4],this.boardArr[6]];
        if (arraysIguales(diag1,arrWin) || arraysIguales(diag2,arrWin)){console.log(marker + "gana diagonal")
            ;return true}
        return false;
    }
}

function arraysIguales(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((valor, i) => valor === arr2[i]);
}

