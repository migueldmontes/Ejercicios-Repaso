// Definimos el color secreto
let colorSecreto = "rojo"; // Puedes cambiar el color a tu elección

// Pedir al usuario que adivine el color
let adivinanza = prompt("Adivina el color que estoy pensando:");

while (adivinanza.toLowerCase() !== colorSecreto) {
  adivinanza = prompt("No es el color correcto, intenta de nuevo:");
}

// Si acierta
alert("¡Felicidades! Adivinaste el color.");
