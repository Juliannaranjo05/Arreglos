let bingo = [];
let iteracion2;
let iterar;
let resta;

let acumulador = 0

for(iterar=0;iterar<5;iterar++){
    let interno = [];
    for(iteracion2=0; iteracion2 < 5 ; iteracion2 ++){
        acumulador = acumulador + 1
        interno[iteracion2] = acumulador*2;
    }
    bingo[iterar] = interno;
}
console.log(bingo);

for(iterar=0;iterar<5;iterar++){
    for(iteracion2 = 4; iteracion2 < 5 ; iteracion2= iteracion2-1){
        if (iteracion2<5) {
            console.log(bingo[iterar][iteracion2]);
        } else {
            console.log("Nada");
        }
    }
    console.log(iteracion2);
}


//*iterar     - 0 - 1
//*iteracion2 - 4 - 
//*console    - 10 - 
//*for(iterar=0;iterar<5;iterar++){
    //*for(iteracion2=0; iteracion2 < 5 ; iteracion2 ++){
     //*   if (iterar === iteracion2) {
      //*      console.log(bingo[iterar][iteracion2])
      //*  } else {
      //*      console.log("Nada");
      //*  }
  //*  }
//*}
    



