// Funcao sem retorno
function imprimirSoma(a, b){
  console.log(a + b)
}

imprimirSoma(2,23)

// Funcao com retorno
function soma(a, b = 1){
  return a + b;
}

console.log(soma(5, 3));
console.log(soma(2))