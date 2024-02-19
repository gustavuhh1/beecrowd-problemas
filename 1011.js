var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// (4/3) * pi * R3
let r = Number(lines[0])

let pi = 3.14159

let formula = (4.0/3) * pi * r**3


console.log("VOLUME = " + formula.toFixed(3))