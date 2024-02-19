var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// 12km / litro

// input tempo gasto ( horas ) velocidade media ( km )

let h = Number(lines[0])
let km = Number([lines[1]])

let distancia = km * h

let kmPorLitro = distancia / 12

console.log(kmPorLitro.toFixed(3))