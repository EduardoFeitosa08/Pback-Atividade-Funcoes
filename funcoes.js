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

function calcularSalario(){
    let nivel = parseInt(document.getElementById('nivel').value)
    let quantAulas = parseInt(document.getElementById('quantAulas').value)
    let salario = 0

    if(nivel == 1){
        salario = 12 * quantAulas
        document.getElementById('valorHora').innerHTML = `R$ ${salario.toFixed(2)}`
    }else if(nivel == 2){
        salario = 17 * quantAulas
        document.getElementById('valorHora').innerHTML = `R$ ${salario.toFixed(2)}`
    }else if(nivel == 3){
        salario = 25 * quantAulas
        document.getElementById('valorHora').innerHTML = `R$ ${salario.toFixed(2)}`
    }

}

function calcularImc(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let imc = (peso / (Math.pow(altura,2))).toFixed(1)


    if(imc < 16.9){
        document.getElementById('imc').innerHTML = `Muito abaixo do peso com IMC de: ${imc}`
    }else if(imc >= 17, imc <=18.4){
        document.getElementById('imc').innerHTML = `Abaixo do peso com IMC de: ${imc}`
    }else if(imc >= 18.5, imc <= 24.9){
        document.getElementById('imc').innerHTML = `Peso Normal com IMC de: ${imc}`
    }else if(imc >= 25, imc <= 29.9){
        document.getElementById('imc').innerHTML = `Acima do peso com IMC de: ${imc}`
    }else if(imc >= 30, imc <= 34.9){
        document.getElementById('imc').innerHTML = `Obesidade grau I com IMC de: ${imc}`
    }else if(imc >= 35, imc <= 40){
        document.getElementById('imc').innerHTML = `Obesidade grau II com IMC de: ${imc}`
    }else if(imc > 40){
        document.getElementById('imc').innerHTML = `Obesidade grau III com IMC de: ${imc}`
    }
}