let frase = '   Espaços em branco   '

 

// Removendo espaços em branco no início e no final

let textoLimpo = frase.trim();

console.log(textoLimpo); // Retorna 'Espaços em branco'

 

// Verificando se uma string começa com determinado texto

let comecaCom = frase.startsWith('Espaços');

console.log(comecaCom); // Retorna true

 

// Verificando se uma string termina com determinado texto

let terminaCom = frase.endsWith('branco');

console.log(terminaCom); // Retorna false

 

let nome = 'Matheus';

let sobrenome = 'Silva';

 

// Conectando strings

let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto); // Retorna seu nome

 

// Usando template strings (Interpolação)

let mensagem = `Olá, ${nome} ${sobrenome}!`;

console.log(mensagem); // Retorna 'Olá, Laura Oliveira!'