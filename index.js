function aplicarDescontoTest(){
    return aplicarDescontoTest(10,2) == 9;
}

function aplicarDesconto(valor, desconto){
    if(desconto>valor) return 0;
    return valor-desconto;
}

console.log("Aplicacao desconto esta funcionando")
console.log(aplicarDescontoTest)