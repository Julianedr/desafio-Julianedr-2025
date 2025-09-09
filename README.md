# ABRIGO DE ANIMAIS

## DESCRIÇÃO DO PROJETO
Este projeto simula um abrigo de animais onde cada animal possui brinquedos favoritos.  
Duas pessoas podem adotar animais conforme os brinquedos que possuem, respeitando regras de adoção e limites definidos pelo programa.

## FUNCIONALIDADES

1. Verificação de **brinquedos válidos** para cada pessoa em **ordem predefinida**;
2. Validação de **animais existentes**;
3. Tratamento de **entradas inválidas** (brinquedos e animais duplicados, inexistentes ou inválidos);
4. **Limitação de quantidade** de animais por pessoa;
5. Retorno da **lista válida** com os animais e seus respectivos destinos em ordem alfabética.

### EXEMPLOS

Entrada para um caso válido:
```js
'RATO,BOLA','RATO,NOVELO', 'Rex,Fofo'
```
Saída:
```js
{
  lista: ['Fofo - abrigo', 'Rex - pessoa 1']
}
```

Entrada para um caso inválido:
```js
'CAIXA,RATO','RATO,BOLA', 'Lulu'
```
Saída:
```js
{
  erro: 'Animal inválido'
}
```

## EXECUÇÃO E INSTALAÇÃO

### INSTALANDO NA SUA MÁQUINA
1. Instalar o [Node](https://nodejs.org/en/);
2. Instalar dependências do projeto com o seguinte comando:
```bash
npm install
```

### EXECUTANDO O PROGRAMA
Para executar o programa, é necessário rodar o comando especificando o arquivo de execução **index.js**, seguido dos três parâmetros referentes aos **brinquedos da pessoa um**, **brinquedos da pessoa dois** e **ordem dos animais considerados**, conforme o exemplo abaixo:

```bash
node index.js 'RATO,BOLA','RATO,NOVELO', 'Rex,Fofo'
```

### VALIDANDO SOLUÇÃO
Para validar a solução, execute os testes unitários com o seguinte comando:

```bash
npm test
```

## TECNOLOGIAS E FERRAMENTAS
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
<img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Node.js-22.19.0-green?logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/tested_with-Jest-99424f.svg?logo=jest"/>
<img src="https://img.shields.io/badge/-Visual%20Studio%20Code-333333?style=flat&logo=visual-studio-code&logoColor=007ACC">