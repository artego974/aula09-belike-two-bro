const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('quais foram suas notas?', (n1) => {
    rl.question('quais foram suas notas?', (n2) =>{
        rl.question('quais foram suas notas?', (n3) =>{
    function brau (n1,n2,n3) {
        let media = Number(n1 + n2 + n3)/3
        console.log(media.toFixed(2))
    }
    brau (Number(n1),Number(n2),Number(n3))
});
    });
});
