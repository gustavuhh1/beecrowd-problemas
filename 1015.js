var input = require('fs').readFileSync('stdin', 'utf8');
var lista = input.split('\n');

let linha1 = lista[0].split(' ')
let linha2 = lista[1].split(' ')

let x1 = parseFloat(linha1[0])
let y1 = parseFloat(linha1[1])
let x2 = parseFloat(linha2[0]) 
let y2 = parseFloat(linha2[1]) 

let resultado = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

console.log(resultado.toFixed(4))
