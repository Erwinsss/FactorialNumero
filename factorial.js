function factorial(n) {
    // Caso base
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo
    return n * factorial(n - 1);
}

// Ejemplo de uso
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(7)); // 5040

// agregando lo repetido 
function factorial(n) {
    // Caso base
    if (n === 0 || n === 1) {
        return 1;
    }
    // Caso recursivo
    return n * factorial(n - 1);
}

// Ejemplo de uso
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(7)); // 5040
