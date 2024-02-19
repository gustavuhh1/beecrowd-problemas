var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let distancia = Number(lines[0])
let litro = parseFloat(lines[1])

let consumo = distancia / litro

console.log(consumo.toFixed(3) + ' km/l')