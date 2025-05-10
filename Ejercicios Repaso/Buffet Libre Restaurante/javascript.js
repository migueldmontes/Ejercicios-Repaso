let platosComidos = 0;
let pedido = "";

while (true) {
  let comida = prompt("¿Qué quieres comer? (Escribe 'salir' para terminar)");
  
  if (comida.toLowerCase() === "salir") {
    break;
  }

  platosComidos++;
  pedido += `Has pedido ${comida}\n`;

  if (platosComidos === 5) {
    alert("¡Vas a reventar!");
  }

  alert(pedido);  // Muestra todos los platos pedidos hasta ahora
}

alert(`Has pedido ${platosComidos} platos. ¡Que aproveche!`);
