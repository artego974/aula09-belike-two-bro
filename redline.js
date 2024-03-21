const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let idade

rl.question('qual sua idade meu mano: ', (idade) => {
 
        let maiorDe18 =18

        if (idade>=maiorDe18){
            console.log("maior de idade")
        } else {console.log("não é maior de idade")}
        ;
    rl.close();
    });
