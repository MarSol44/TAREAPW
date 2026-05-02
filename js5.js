let acumulado=0;

function sumar(){
    let sumador=document.getElementById("numero2").value;
    acumulado=acumulado+parseInt(sumador);

    document.getElementById("presultado").innerHTML=acumulado;
}

function restar(){
    let restador=document.getElementById("numero2").value;
    acumulado=acumulado-parseInt(restador);              

    document.getElementById("presultado").innerHTML=acumulado;
}

function multiplicar(){
    let multiplicador=document.getElementById("numero2").value;
    acumulado=acumulado*parseInt(multiplicador);

    document.getElementById("presultado").innerHTML=acumulado;
}

function dividir(){
    let divisor=document.getElementById("numero2").value;
    if(parseInt(divisor)===0){
        document.getElementById("presultado").innerHTML="No se puede dividir por cero";
        
        return;

    }
    acumulado=acumulado/parseInt(divisor);

    
    document.getElementById("presultado").innerHTML=acumulado;
}

function limpiar(){
    acumulado=0;
    document.getElementById("presultado").innerHTML=acumulado;
}