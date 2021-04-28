//Creare 2 array di 2 lunghezze diverse
let array_1 = [];
let array_2 = [];

let lunghezza_1 = prompt("Quanto deve essere grande il primo array?")
let lunghezza_2 = prompt("Quanto deve essere grande il secondo array?")

for(let i=0; i<lunghezza_1;i++){
    array_1[i] = Math.floor(Math.random()*101)
}
for(let i=0; i<lunghezza_2;i++){
    array_2[i] = Math.floor(Math.random()*101)
}

console.log('array iniziali:')
console.log(array_1)
console.log(array_2)
console.log("-----------------------")


//Confrontare le lunghezze
//riempire l'array più corto finchè non raggiunge la lunghezza di quello più lungo
if(array_1.length < array_2.length){
    while(array_1.length<array_2.length){
    array_1.push(Math.floor(Math.random()*101))
    }
}else if(array_2.length<array_1.length){
    while(array_2.length<array_1.length){
        array_2.push(Math.floor(Math.random()*101))
        }
}else{
    alert("I due array sono uguali")
}
console.log('array dopo la correzione:')
console.log(array_1)
console.log(array_2)
console.log("-----------------------")