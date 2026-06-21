function formatarNome (nomeBaguncado) {
  let inicio = nomeBaguncado[0].toUpperCase(); 
  let corpo = nomeBaguncado.slice(1).toLowerCase();
   return inicio + corpo;
}

console.log(formatarNome("CARLIHOS MAIS"));