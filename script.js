
// var calcMedia = function(){
//     return (this.nota1 + this.nota2)/2;


// function criarAluno(nome, n1, n2){
//     return{    
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function(){
//             return (this.nota1 + this.nota2)/2;
//         }
//     }
// }

function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;


this.media = function(){
    return (this.nota1 + this.nota2) / 2;
    }
}


var a = new aluno("Igor", 8, 7);
var b = new aluno("João",6,7);

console.log(a.media() + " - " +  b.media());



// var turma = [
//     criarAluno("Igor", 9, 6),
//     criarAluno("João", 7, 4)
//  ]

// var aluno = turma[0];

// turma.forEach(function (elemento){
//     console.log(elemento)
// })

// console.log(aluno);
// console.log(aluno.media());