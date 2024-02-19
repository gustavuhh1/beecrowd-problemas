const input = require('fs').readFileSync('stdin', 'utf8');
const valoresRecebidos = input.split('\n');
const numero = parseInt(valoresRecebidos.shift());
let tempo = numero;

const h = Math.floor(tempo / 3600);
tempo -= h * 3600;

const m = Math.floor(tempo / 60);
tempo -= m * 60;

console.log(`${h}:${m}:${tempo}`);