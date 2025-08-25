'use strict'

function fazerSoma(){
    let valor1 = parseInt(document.getElementById('valor1').value)
    let valor2 = parseInt(document.getElementById('valor2').value)

    let resultado = valor1 + valor2
    document.getElementById('resultado').innerHTML = resultado
}

function fazerSubtracao(){
    let valor1 = parseInt(document.getElementById('valor1').value)
    let valor2 = parseInt(document.getElementById('valor2').value)

    let resultado = valor1 - valor2
    document.getElementById('resultado').innerHTML = resultado
}

function fazerMultiplicacao(){
    let valor1 = parseInt(document.getElementById('valor1').value)
    let valor2 = parseInt(document.getElementById('valor2').value)

    let resultado = valor1 * valor2
    document.getElementById('resultado').innerHTML = resultado
}

function fazerDivisao(){
    let valor1 = parseInt(document.getElementById('valor1').value)
    let valor2 = parseInt(document.getElementById('valor2').value)

    let resultado = valor1 / valor2
    document.getElementById('resultado').innerHTML = resultado
}

function calcularDesconto(){
    console.log('VAI SE FUDER')
    let quant = parseInt(document.getElementById('valor1').value)
    let preco = parseInt(document.getElementById('valor2').value)
    let desconto = 0
    let totalDesconto = 0
    let descontoRecebido = 0

    let total = quant * preco
    
    if(quant<=5){
        desconto = 2
        descontoRecebido = (quant * (preco * (desconto / 100)))
        totalDesconto = total - descontoRecebido
        document.getElementById('resultadoDesconto').innerHTML = 'R$ ' + totalDesconto.toFixed(2)
        document.getElementById('desconto').innerHTML = 'R$ ' + descontoRecebido.toFixed(2)
    }else if(quant > 5, quant <= 10){
        desconto = 3
        descontoRecebido = (quant * (preco * (desconto / 100)))
        totalDesconto = total - descontoRecebido
        document.getElementById('resultadoDesconto').innerHTML = 'R$ ' + totalDesconto.toFixed(2)
        document.getElementById('desconto').innerHTML = 'R$ ' + descontoRecebido.toFixed(2)
    }else if(quant > 10){
        desconto = 5
        descontoRecebido = (quant * (preco * (desconto / 100)))
        totalDesconto = total - descontoRecebido
        document.getElementById('resultadoDesconto').innerHTML = 'R$ ' + totalDesconto.toFixed(2)
        document.getElementById('desconto').innerHTML = 'R$ ' + descontoRecebido.toFixed(2)
    }

    
    document.getElementById('resultado').innerHTML = 'R$ ' + total.toFixed(2)
}