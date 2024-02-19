var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor = Number(lines[0]);
const notas = [100, 50, 20, 10, 5, 2, 1];
console.log(valor)
function formatarMensagem(quantidade, nota) {
  return `${quantidade} nota(s) de R$ ${nota},00`;
}

for (const nota of notas) {
  let quantidade = valor >= nota ? Math.floor(valor / nota) : 0;
  valor -= quantidade * nota;
  console.log(formatarMensagem(quantidade, nota));
}
