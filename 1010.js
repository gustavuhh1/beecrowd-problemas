var input = require('fs').readFileSync('stdin', 'utf8');
var lista = input.split('\n');

let linha1 = lista[0].split(' ')
let linha2 = lista[1].split(' ')

let pecas1 = Number(linha1[1])
let valor1 = Number(linha1[2])
let pecas2 = Number(linha2[1])
let valor2 = Number(linha2[2])

let total = (pecas1 * valor1) + (pecas2 * valor2)
console.log("VALOR A PAGAR: R$ " + total.toFixed(2))
