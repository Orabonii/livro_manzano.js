let dolares, reais, cotacao;

cotacao = parseFloat(prompt("Digite a cotação do Dólar:"));
dolares = parseFloat(prompt("Digite a quantidade de dólares disponíveis para conversão:"));
reais = cotacao * dolares;

console.log("Resultado da conversão: R$", reais);
