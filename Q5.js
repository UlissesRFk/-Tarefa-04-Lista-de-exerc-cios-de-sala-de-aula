function extrairDominio(email){
    let localizacaoDoArroba = email.indexOf("@");
    let dominio = email.slice(localizacaoDoArroba + 1);
    return dominio;
}

console.log(extrairDominio("fulanodetown@gmail.com"));