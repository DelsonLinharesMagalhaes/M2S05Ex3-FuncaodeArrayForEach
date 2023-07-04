//Percorrendo array

const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

cores = ["Verde", "Amarelo", "Azul", "Branco"];
function imprimir(item) {
    console.log(item);
}
cores.forEach(imprimir);


numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function tabuadaDe2(item) {
    console.log(item*2);
}
numeros.forEach(tabuadaDe2);

numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;
function somar(item) {
    total += item;
}
numeros.forEach(somar);
console.log(total);

