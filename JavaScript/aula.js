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

/* const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim'); 
} else {
    console.log('Não');
} */

/* function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Gustavo'); */

/* function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo; 
}

console.log(incrementarJuros(100, 10)); */

/* function escrevaSeuNome(nome) {
    console.log('meu nome é: ' + nome);
}

escrevaSeuNome('Gustavo'); */

/* function maiorDeIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
}

maiorDeIdade(5); */

const gustavo = {
    nome: 'Gustavo Freitas',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

