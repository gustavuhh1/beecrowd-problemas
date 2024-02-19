var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])

console.log('TRIANGULO: ' + (A * C / 2).toFixed(3))
console.log('CIRCULO: ' + (3.14159* C**2).toFixed(3))
console.log('TRAPEZIO: ' + ((A+B)*C/2).toFixed(3))
console.log('QUADRADO: ' + (B * B).toFixed(3))
console.log('RETANGULO: '+ (A*B).toFixed(3))