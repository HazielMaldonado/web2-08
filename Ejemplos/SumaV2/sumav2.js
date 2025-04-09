function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;
  let resultado;
  let signo;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor ingresa ambos números.");
    return;
  }

  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      signo = "+";
      break;
    case "restar":
      resultado = num1 - num2;
      signo = "-";
      break;
    case "multiplicar":
      resultado = num1 * num2;
      signo = "×";
      break;
    case "dividir":
      if (num2 === 0) {
        alert("No se puede dividir entre cero.");
        return;
      }
      resultado = num1 / num2;
      signo = "÷";
      break;
  }

  // Mostrar resultado principal
  document.getElementById("resultado").textContent = resultado;

  // Agregar al historial
  const historialDiv = document.getElementById("historial");
  const nuevaLinea = document.createElement("p");
  nuevaLinea.textContent = `${num1} ${signo} ${num2} = ${resultado}`;
  historialDiv.appendChild(nuevaLinea);
}