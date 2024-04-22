let prestacao_valor, atraso, prestacao, taxa;

prestacao_valor=parseInt(prompt("Digite o valor da sua prestação: R$"));
atraso=parseInt(prompt("Digte o tempo de atraso em dias: "));
taxa=parseInt(prompt("Digite a porcentagem da sua taxa: "));

prestacao = prestacao_valor + (prestacao_valor * taxa / 100) * atraso
console.log("O valor da sua prestacao em atraso fica de R$: ",prestacao);