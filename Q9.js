function saudarUsuario(nome, idioma = "pt") {
    let mensagem;

    if (idioma.toLowerCase() === "pt") {
        mensagem = `Olá, ${nome}!`;
    } else if (idioma.toLowerCase() === "en") {
        mensagem = `Hello, ${nome}!`;
    } else if (idioma.toLowerCase() === "es") {
        mensagem = `¡Hola, ${nome}!`;
    } else {
        mensagem = "Identifique-se!";
    }

    return mensagem;
}

console.log(saudarUsuario("Ana"));
console.log(saudarUsuario("John", "en"));
console.log(saudarUsuario("Carlos", "es"));