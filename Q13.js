let usuarios = [
    {
        id: 1,
        nome: "Claudio",
        ativo: true
    },
    {
        id: 2,
        nome: "Joana",
        ativo: true
    },
    {
        id: 3,
        nome: "Pedro",
        ativo: false
    }
];

usuarios.forEach(usuario => {
    if(usuario.ativo){
        console.log(`Olá, ${usuario.nome}. Acesso ativo!`);
    }
});
