    let contener = [];
    let horizontal = [];
    let iteracion2;

        for(iteracion2=0;iteracion2<10;iteracion2++){
            horizontal[iteracion2] = contener.push(Math.floor(Math.random() * 100)) + 1;
        }
    for(numero=0;numero<contener.length;numero++){
        if(contener[numero] %2 === 0){
            console.log(numero + " es par");
        } else {
            console.log(numero + " es impar");
        }
    }
    console.log(contener);