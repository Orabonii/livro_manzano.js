let tempo_gasto, velocidade_media, distancia_percorrida, litros_usados;

tempo_gasto=parseInt(prompt("Digite o tempo gasto em horas: "));
velocidade_media=parseInt(prompt("Digite velocidade média durante a viagem KM: "));
distancia_percorrida = tempo_gasto * velocidade_media;
litros_usados = distancia_percorrida / 12;
console.log("A sua velocidade média foi: ",velocidade_media);
console.log("Tempo gasto foi: ",distancia_percorrida,"KM");
console.log("A quantidade de litros utilizadas foi: ",litros_usados.toFixed(2),"L");