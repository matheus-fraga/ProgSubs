// Lê a entrada do usuário a partir do terminal (stdin) usando o módulo "fs" do Node.js
var input = require('fs').readFileSync('stdin', 'utf8');

    var valores = input.split("\n"); // dividindo a entrada em substrings com backslash.
    var A = parseInt(valores.shift()); // removendo o 1º elemento do array 'valores', armaz. em 'A' e  convertendo p/ int.
    var B = parseInt(valores.shift()); // removendo o 1º elemento do array 'valores', armaz. em 'B' e  convertendo p/ int.
    var X = A + B; // somando val armaz. em 'A' e 'B' e atrib. em 'X'.
    console.log("X = " + X); // apresentando a inf. formatada.