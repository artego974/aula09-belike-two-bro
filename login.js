const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const senha = "blau"
rl.question('insira uma senha', (senhaUsuario) => {

if (senha === senhaUsuario) {console.log ('login sucedido')}
else {console.log('login invalido')}

 });

 