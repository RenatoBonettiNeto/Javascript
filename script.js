var primeiraNota = parseFloat(prompt("Informe a primeira nota: "));
var segundaNota = parseFloat(prompt("Informe a segunda nota."));
var conceito = "";

var media = (primeiraNota + segundaNota) / 2;

if (primeiraNota > 10 || segundaNota > 10){
    console.log("Nota não deve ser maior que 10!")
}
else if(media >= 8.0){
    conceito = "Ótimo"
}
else if( media >= 6.5){
    conceito = "Bom"
}
else {
    conceito = "Regular"
} 

console.log(media);
console.log(conceito);

switch(conceito){

    case "Ótimo":
        console.log("Meus parabéns!");
        break;

    case "Bom":
        console.log("Você está indo muito bem!");
        break;

    case "Regular":
        console.log("Você precisa estudar mais!")
        break;

    default:
        console.log("Houve algum erro!");
        break;
    }