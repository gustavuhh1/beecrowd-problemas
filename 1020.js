var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let dias = parseInt(lines[0])

const anos = Math.floor(dias / 365)
dias -= anos * 365
const meses = Math.floor(dias / 30)
dias -= meses * 30
console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`)

	

