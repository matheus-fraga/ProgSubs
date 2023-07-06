// Lê a entrada do usuário a partir do terminal (stdin) usando o módulo "fs" do Node.js
var input = require('fs').readFileSync('stdin', 'utf8');

    var PI = 3.14159; // criação da variável PI e atrib. do valor
    var raio = parseFloat(input); // conversão do valor do input
    var area = PI * Math.pow(raio, 2); // cálculo da área
    console.log("A=" + area.toFixed(4)); // apresentando a inf. formatada.