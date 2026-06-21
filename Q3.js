let lista = [15, 18, 19, 20];
function filtrarPares(numeros){
    let pares = [];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 === 0){
            pares.push(lista[i]);
        }
    }
    return pares;
}

console.log(filtrarPares(lista));