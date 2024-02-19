var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// x( 60km ) y( 90km )
// 1h ( 60 min ) 30 km

let km = Number(lines[0])
let tempo = km * 2

console.log(tempo + ' minutos')