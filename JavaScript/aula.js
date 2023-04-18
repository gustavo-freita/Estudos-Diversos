/* Para ver seo número é par ou impar

const numero = 3;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log('Par'); 
} else {
    console.log('Impar')
} */

/* Saber se o número é divisível por ele. 
const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numeroDivisivelPor5) {
    console.log('Sim'); 
} else {
    console.log('Não')
} */

const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim'); 
} else {
    console.log('Não');
}