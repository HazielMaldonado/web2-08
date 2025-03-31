function numeroAleatorio(min, max){
    return Math.floor( Math.random()*(max-min + 1)+min);
}
console.log(numeroAleatorio(1,11));

//Funcion expresada 
//Anonima (Expresada en una variable)
const miNumero = function(min, max){
    return Math.floor( Math.random()*(max-min)+min);
}
console.log(miNumero(11,32));

const miNumeroFlecha = (max)=>{
    return Math.floor( Math.random()*(max-1)+1); 
} 
console.log(miNumeroFlecha(89))

//Funcion tradicional
function datos (a){
    return a+100;
}

function datos (a){
    return a + 100;
}

var numero= (a)=>{
    return a + 100;
}

var numero= (a) => a + 100;

var  numero = a => a + 100;

//funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor( Math.random()*(max-min)+min);
}

const NumeroFlecha = (min, max) =>Math.floor( Math.random()*(max-min)+min);