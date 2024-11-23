
function media(n1,n2){

    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2)/2;
    // console.log(media);

    return media;
}

var resultado1 = media(6,7);

var m = media;
var resultado2 = m(8,7);

console.log("Primeiro resultado: " + resultado1 + "e Segundo Resultado: " + resultado2)
