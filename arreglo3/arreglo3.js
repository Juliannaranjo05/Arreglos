    let nomina = [];
    let salarioMin = 1300000;
    let muestra = [];
    let numeroRegistro = nomina.length;
    let iteracion;
    let salario;

    nomina = [
        {id:'132', nombre:'Maria', apellidos:'Josefa Clemente', cargo:'alcaldesa', valorDia:'700000000000', diasTrabajados:'17', salario:'0', subTrans:'0', retencion:'0', salud:'0', pension:'0', deducible:'0'},
        {id:'135', nombre:'Mario', apellidos:'Quesada', cargo:'volador', valorDia:'300', diasTrabajados:'4', salario:'0', subTrans:'0', retencion:'0', salud:'0',pension:'0', deducible:'0'},
        {id:'145', nombre:'Matias', apellidos:'Tejada', cargo:'vendedor', valorDia:'7000', diasTrabajados:'72', salario:'0',subTrans:'0', retencion:'0', salud:'0', pension:'0', deducible:'0'},
        {id:'242', nombre:'Desiree', apellidos:'Ferreiro', cargo:'operario', valorDia:'100000', diasTrabajados:'30',salario:'0',subTrans:'0', retencion:'0', salud:'0',pension:'0',deducible:'0'},
        {id:'247', nombre:'Santos', apellidos:'Espejo', cargo:'directivo', valorDia:'800', diasTrabajados:'12', salario:'0',subTrans:'0', retencion:'0',salud:'0', pension:'0',deducible:'0'},
        {id:'167', nombre:'Maria', apellidos:'Lucia Herraiz', cargo:'gerente', valorDia:'50000', diasTrabajados:'16', salario:'0',subTrans:'0', retencion:'0', salud:'0', pension:'0', deducible:'0'},
        {id:'352', nombre:'Iñaki', apellidos:'Bolaños', cargo:'empleado', valorDia:'40000', diasTrabajados:'25', salario:'0',subTrans:'0', retencion:'0',salud:'0', pension:'0', deducible:'0'},
        {id:'283', nombre:'Esteban', apellidos:'Aguilera', cargo:'empleado', valorDia:'400', diasTrabajados:'17', salario:'0',subTrans:'0', retencion:'0', salud:'0', pension:'0',deducible:'0'},
        {id:'112', nombre:'Cayetana', apellidos:'Pineda', cargo:'empleado', valorDia:'40000', diasTrabajados:'17', salario:'0',subTrans:'0', retencion:'0', salud:'0',pension:'0',deducible:'0'},
        {id:'179', nombre:'Erik', apellidos:'Iglesias', cargo:'jefe', valorDia:'100000', diasTrabajados:'17',salario:'0',subTrans:'0',retencion:'0', salud:'0',pension:'0', deducible:'0'}
    ]
    console.log(nomina);
        for(iteracion=0;iteracion<nomina.length;iteracion++){
            nomina[iteracion].salario = nomina[iteracion].valorDia * nomina[iteracion].diasTrabajados;
            console.log("El salario de " + nomina[iteracion].nombre + " es " +  nomina[iteracion].salario );
            if (nomina[iteracion].salario < salarioMin*2){
                nomina[iteracion].subTrans = 120000;
                console.log("El subsidio de transporte de " + nomina[iteracion].nombre + " es " + nomina[iteracion].subTrans);
            } else {
                nomina[iteracion].subTrans = 0;
                console.log(nomina[iteracion].nombre + " no tiene subsidio de transporte = " + nomina[iteracion].subTrans);
            }
            if (nomina[iteracion].salario > salarioMin*6){
                nomina[iteracion].retencion = 0.02;
                console.log(nomina[iteracion].nombre + " tiene una retencion de " + nomina[iteracion].retencion)
            } else {
                nomina[iteracion].retencion = 0;
                console.log(nomina[iteracion].nombre + " no tiene retencion " + nomina[iteracion].retencion)
            }
            if (nomina[iteracion].salario > salarioMin*8){
                nomina[iteracion].retencion = 0.04;
                console.log(nomina[iteracion].nombre + " tiene una retencion de " + nomina[iteracion].retencion)
            } else {
                nomina[iteracion].retencion = 0;
                console.log(nomina[iteracion].nombre + " no tiene retencion " + nomina[iteracion].retencion)
            }
            if (nomina[iteracion].salario > salarioMin*12){
                nomina[iteracion].retencion = 0.08;
                console.log(nomina[iteracion].nombre + " tiene una retencion de " + nomina[iteracion].retencion)
            } else {
                nomina[iteracion].retencion = 0;
                console.log(nomina[iteracion].nombre + " no tiene retencion " + nomina[iteracion].retencion)
            }
            nomina[iteracion].salud = nomina[iteracion].salario*0.12
            console.log(nomina[iteracion].nombre + " su salud es igual a " + nomina[iteracion].salud);
            nomina[iteracion].pension = nomina[iteracion].salario*0.16;
            console.log(nomina[iteracion].nombre + " su pension es igual a " + nomina[iteracion].pension); 
            nomina[iteracion].arl = nomina[iteracion].salario*0.052;
            console.log(nomina[iteracion].nombre + " su arl es igual a " + nomina[iteracion].pension);
            nomina[iteracion].deducible = nomina[iteracion].pension + nomina[iteracion].salud;
            nomina[iteracion].pagoTotal = (nomina[iteracion].salario + nomina[iteracion].subTrans) - nomina[iteracion].deducible;
            console.log(nomina[iteracion].nombre + " " + nomina[iteracion].apellidos + " su pago total es de $" + nomina[iteracion].pagoTotal)
            console.log(' ') 
            }