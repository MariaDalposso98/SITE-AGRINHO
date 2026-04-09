
function podeDirigir(idade) {
  if (idade >= 18) {
    return "Pode tirar a habilitação!";
  } else {
    return "Ainda não tem idade suficiente.";
  }
}

console.log(podeDirigir(20));
