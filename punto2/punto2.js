    let tabla = [];
    let cantidadPar = 0;
    let cantidadImpar = 0;

    function tabla5(Pmultiplicando, Pmultiplicar){
        while(Pmultiplicando<5){
            Pmultiplicando++;
            let producto = Pmultiplicar *  Pmultiplicando;
            tabla[Pmultiplicando] = producto;
            if(producto%2 == 0){
                console.log(+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto + ", el numero es par ");
                cantidadPar++;
            } else {
                console.log(+ Pmultiplicar + " x " + Pmultiplicando + " = " + producto + ", el numero es impar ");
                cantidadImpar++;
            }
        }
        console.log(tabla);
        console.log('La cantidad total de numeros pares es ' + cantidadPar);
        console.log('La cantidad total de numeros impares es ' + cantidadImpar);
    }

    console.log(tabla5(0, 5));
    
        
    