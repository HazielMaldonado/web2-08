let frutas = ["manzana", "pera", "palta", "mango"];

/*
console.log(frutas);

console.log(frutas.length);
console.log(frutas[2]);
console.log(frutas[15]);
*/

for(let i = 0; i< frutas.length; i++){
    console.log("Fruta número "+(i+1)+" = "+ frutas[i]);
}

for (const fruta of frutas) {

    console.log(fruta);
    
}


for (const fruta in frutas) {
    console.log(fruta);
}

/*

for(let i = 0; i <=10; i++){
    console.log("3 x "+(i)+" = "+ (3*i));
    console.log("10 x "+(i)+" = "+ (10*i));
    
        
        
    }
    */

    for (let i = 3; i <= 10; i += 7) { // i toma los valores 3 y 10
        console.log(`Tabla del ${i}:`);
        for (let j = 1; j <= 10; j++) { // Multiplica del 1 al 10
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log('-------------------');
    }
    