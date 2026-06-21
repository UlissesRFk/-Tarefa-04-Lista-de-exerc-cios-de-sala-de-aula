function totalDivisoresLento(valor) {
    let contador = 0;

    for (let teste = 1; teste <= valor; teste++) {
        if (valor % teste === 0) {
            contador++;
        }
    }

    return contador;
}

function totalDivisoresRapido(valor) {
    let contador = 0;
    const raiz = Math.sqrt(valor);

    for (let divisor = 1; divisor <= raiz; divisor++) {
        if (valor % divisor === 0) {

            const parceiro = valor / divisor;

            if (divisor === parceiro) {
                contador += 1;
            } else {
                contador += 2;
            }
        }
    }

    return contador;
}

const numeroAnalisado = 999999999;

console.time("Método Tradicional");
const respostaLenta = totalDivisoresLento(numeroAnalisado);
console.timeEnd("Método Tradicional");

console.log("Total de divisores encontrados (tradicional):", respostaLenta);

console.time("Método Inteligente");
const respostaRapida = totalDivisoresRapido(numeroAnalisado);
console.timeEnd("Método Inteligente");

console.log("Total de divisores encontrados (otimizado):", respostaRapida);