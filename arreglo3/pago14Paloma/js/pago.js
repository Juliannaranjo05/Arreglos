/**
 * Autor: Samuel Paloma
 */
const salario = function(pdias,pvdia){
    let dias = pdias;
    let vdia = pvdia;
    let totalSalario 
    totalSalario = dias * vdia 
    return totalSalario
}

const subTrans = function(pdias, pvdia){
    let salarioMinimo = 160000000
    let salarioTrans = salario(pdias, pvdia)
    let subTransporte 
    if(salarioTrans<=2*salarioMinimo){
        subTransporte =11400
    } else{
        subTransporte = 0
    }
    return subTransporte
} 

const salud = function(pdias,pvdia){
    let pagoSalud
    pagoSalud = salario(pdias,pvdia)*0.12
    return pagoSalud
}

const pension = function(pdias, pvdia){
    let pagoPension
    pagoPension = salario(pdias, pvdia)*0.16
    return pagoPension
}

const deducible = function(pdias,pvdia){
    let pagoDeducible
    pagoDeducible = pension(pdias, pvdia) + salud(pdias, pvdia)
    return pagoDeducible
    
}

const pagoTotal = function(pdias, pvdia){
    let pagoSueldo
    pagoSueldo = salario(pdias, pvdia)+subTrans(pdias, pvdia)-deducible(pdias, pvdia);
    return pagoSueldo

}

