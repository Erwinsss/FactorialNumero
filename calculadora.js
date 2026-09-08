// CALCULADORA BÁSICA EN CONSOLA
const calculadora = (num1, operador, num2) => {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return '❌ Error: División entre cero';
            }
            return num1 / num2;
        default:
            return '❌ Operador inválido. Usa +, -, * o /';
    }
};

// EJEMPLOS DE USO:
console.log(calculadora(10, '+', 5));   // 15
console.log(calculadora(10, '-', 5));   // 5
console.log(calculadora(10, '*', 5));   // 50
console.log(calculadora(10, '/', 5));   // 2
console.log(calculadora(10, '/', 0));   // Error