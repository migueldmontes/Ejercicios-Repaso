// Preguntar sobre las características del mueble
let material = prompt("¿El mueble es de madera? (S/N)").toUpperCase();
let tipo = prompt("¿Es una mesa? (S/N)").toUpperCase();

// Condiciones para encontrar el mueble adecuado
if (material === "S") {
  if (tipo === "S") {
    alert("¡El mueble es una Mesa Roble!");
  } else {
    alert("¡El mueble es una Silla Mackintosh!");
  }
} else {
  if (tipo === "S") {
    alert("¡El mueble es una Mesa IKEA!");
  } else {
    alert("¡El mueble es una Silla IKEA!");
  }
}
