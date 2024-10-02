    let bingo = [];
    let interno = [];
    let iteracionX = 0;
    let iteracionY = 4;
    let iteracion1;
    let iteracion2;

    for(iteracion1=0; iteracion1<5;iteracion1++){
        let interno = [];
        for (iteracion2=0; iteracion2<5;iteracion2++){
            interno[iteracion2] = Math.floor(Math.random() * 100) + 1;
        }
        bingo[iteracion1] = interno;
    }
    console.log(bingo);
    console.log("Los numeros de la diagonal de arriba hacia abajo son");
    for(iteracion1=0; iteracion1<5;iteracion1++){
        console.log(bingo[iteracion1][iteracionX]);
        iteracionX++;
    }
    console.log("Los numeros de la diagonal de abajo hacia arriba son");
    for(iteracion1=0; iteracion1<5;iteracion1++){
        console.log(bingo[iteracion1][iteracionY]);
        iteracionY = iteracionY - 1;
    }