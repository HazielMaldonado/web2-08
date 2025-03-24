/*
function name(Argumentos){
    LN

}

*/
/*
saludar();

function saludar(){
    alert ("hola mundo");
}
*/

function saludar(nombre) {

    return "Mi nombre es: " + nombre;

}
console.log(saludar("Aaron"));

function suma(n1, n2){
    return parseInt(n1) + parseInt(n2);

}

let numero1= prompt("Ingresa un primer numero");
let numero2= prompt("Ingresa un segundo numero");

let resultado = suma(numero1, numero2);

console.log("El total es de: " +resultado);