function calcula(operacao) {
    let num1 = parseFloat(document.getElementById('zeroum').value);
    let num2 = parseFloat(document.getElementById('zerodois').value);
    let resultado = 0;
    if(isNaN(num1) || isNaN(num2)){
        alert('fala um número idiota do caralho :D');

    }else{
        if(operacao == '+'){
            resultado = num1 + num2;
        }else if(operacao == '-'){
            resultado = num1 - num2;
        }else if(operacao == '*'){
            resultado = num1 * num2;
    }else if(operacao == '/'){
        resultado = num1 / num2;
    }else if(operacao == '%'){
        resultado = num1 % num2;
    document.getElementById('resultado').textContent = " resultado: " + resultado;
}
}
}