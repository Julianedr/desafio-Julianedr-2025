import { AbrigoAnimais } from './src/abrigo-animais.js';

const abrigo = new AbrigoAnimais();

const args = process.argv.slice(2);

const brinquedosPessoa1 = args[0];
const brinquedosPessoa2 = args[1];
const ordemAnimais = args[2];

const resultado = abrigo.encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais);

console.log(resultado);