function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso
console.log(factorial(5)); // 120
