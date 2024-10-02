/**
 * Numeros del 1 al 10
 * Autor: Julian Naranjo
 * Fecha: 08/07/2024
 */

    let arregloNumeros = [];
    let resultado = "";

    arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for(let iterar=0;iterar<arregloNumeros.length;iterar++){
        resultado += '<li class="item">' + arregloNumeros[iterar] + '</li>'
    }

    console.log(resultado);
    document.getElementById('lista-numero').innerHTML = resultado;

    arregloNumeros = [];
    for(iterar=0;iterar<10;iterar++) {
        let numero = iterar+1;
        arregloNumeros.push(numero);
    }

    resultado = "";
    for(iterar=0;iterar<10;iterar++) {
        resultado += '<li class="item">' + arregloNumeros[iterar] + '</li>'
    }

    document.getElementById('lista-Dosnumero').innerHTML = resultado;