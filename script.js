
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function calcularFatorial() {
  const numero = parseInt(prompt("Digite um número inteiro positivo:"));

  if (numero < 0) {
    alert("O número deve ser positivo.");
  } else {
    const fatorialResultado = fatorial(numero);
    const fibonacciResultado = fibonacci(numero);

    alert(`O fatorial de ${numero} é ${fatorialResultado}.`);
    alert(`A sequência de Fibonacci até ${numero} é: ${fibonacciResultado}.`);
  }
}

calcularFatorial();
