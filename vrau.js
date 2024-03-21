const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('digite seu primeiro numero: ', (numero1) => {
    rl.question('digite o segundo numero: ', (numero2) => {
        const resultado = Number(numero1) + Number(numero2);
        console.log('A soma de' , Number(numero1), 'e', Number(numero2), 'é', Number(resultado)
        );
    rl.close();
    });
});