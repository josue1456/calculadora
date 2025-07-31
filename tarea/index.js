alert("Bienvenido");


let num1 = parseFloat(prompt("Ingrese el primer número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let num2 = parseFloat(prompt("Ingrese el segundo número:"));


let resultado;
switch (operacion) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            resultado = "Error: División por cero";
        }
        break;
    default:
        resultado = "Error: Operación inválida";
}

// Mostrar resultado
alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);