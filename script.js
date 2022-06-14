let refrigerante = 3 * 11.99;
let macarrao = 4 * 6.99;
let ervilha = 3 * 6.99;
let arroz = 3 * 22.99;
let feijao = 1 * 11.89;
let vinho = 3 * 70.00;

let soma = refrigerante + macarrao + ervilha + arroz + feijao + vinho

let amigo1 = soma - vinho;
let amigo2 = vinho;

if(soma % 2 == 0){
    amigo1 = (soma / 2) - vinho;
    amigo2 = (soma / 2) + vinho;
}else {
    amigo1 = (soma / 2);
    amigo2 = (soma / 2);
}
console.log(`O total da compra foi ${soma} e eu pagarei ${amigo1} e meu amigo pagará ${amigo2}`)



// Extra alert //

let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante: "))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))
total = precoRefrigerante * quantidadeRefrigerante
alert(`Valor total a ser pago: ${total}`)

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão: "))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))
total = precoMacarrao * quantidadeMacarrao
alert(`Valor total a ser pago: ${total}`)

let precoErvilha = parseFloat(prompt("Digite o valor do ervilha: "))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))
total = precoErvilha * quantidadeErvilha
alert(`Valor total a ser pago: ${total}`)

let precoArroz = parseFloat(prompt("Digite o valor do arroz: "))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))
total = precoArroz * quantidadeArroz
alert(`Valor total a ser pago: ${total}`)

let precoFeijao = parseFloat(prompt("Digite o valor do feijão: "))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))
total = precoFeijao * quantidadeFeijao
alert(`Valor total a ser pago: ${total}`)

let precoVinho = parseFloat(prompt("Digite o valor do vinho: "))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))
total = precoVinho * quantidadeVinho
alert(`Valor total a ser pago: ${total}`)