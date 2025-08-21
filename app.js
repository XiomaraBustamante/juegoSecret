
let numSecre=0;
let intentos=0;
let listaNumeroSorteados=[];
let numMaximo=10;
console.log(numSecre);

function verificarIntento(){
    let numUsua=parseInt(document.getElementById('valorUsua').value);
    
    if(numUsua===numSecre){
       asignarTextoEle('p',  `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'} `);
       document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acepto
        if(numUsua>numSecre){
            asignarTextoEle('p','El número secreto es menor')
        }else{
            asignarTextoEle('p','El número secreto es mayor')
        }

        intentos++
        limpiarCaja();
        
    }
        
    return;
}

//REDUCIR CODIGO
function asignarTextoEle(elemento, texto){
       let elementoHTML= document.querySelector(elemento);
       elementoHTML.innerHTML=texto;
}

function generarNumeroSecre() {
    let numGenerado= Math.floor(Math.random()*numMaximo)+1;
    console.log(numGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length==numMaximo){
       asignarTextoEle('p','Ya se sortearon todos los numeros posibles');
    }else{
    //si el numero generado esta en la lista
    if(listaNumeroSorteados.includes(numGenerado)){
        return generarNumeroSecre();

    } else{
        listaNumeroSorteados.push(numGenerado);
        return numGenerado;
    }
        }
    
}

function limpiarCaja(){
    //puede ser asi tbm
    document.getElementById('valorUsua').value='';
    
}

function condicionesIniciales(){
asignarTextoEle('h1', 'Juego del número secreto!');
asignarTextoEle('p', `Indica un número del 1 al ${numMaximo}`);
numSecre=generarNumeroSecre();
intentos=1;

}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar intervalos de numeros
    //generar el numero aleatorio
     //inciiarlar el numero de instentos
     condicionesIniciales();
    
    //desahbiliar el boton de nuevo juego
     document.getElementById('reiniciar').setAttribute('disabled', 'true');
   

}

condicionesIniciales();