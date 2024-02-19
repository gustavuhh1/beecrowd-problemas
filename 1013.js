var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

// formula  (a + b + a*b*(a-b))/2

let a = Number(lines[0])
let b = Number(lines[1])
let c = Number(lines[2])

function qualMaior(a, b, c) {
  let maior = Math.max(a, b, c);


  return `${maior} eh o maior`;
}

const result = qualMaior(a, b, c);
console.log(result);