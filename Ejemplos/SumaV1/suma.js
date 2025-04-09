
    function calcular() {
      // Obtener los valores desde los inputs
      const num1 = parseFloat(document.getElementById("num1").value);
      const num2 = parseFloat(document.getElementById("num2").value);
      const operacion = document.getElementById("operacion").value;
      let resultado;

      // Validar que los números no estén vacíos ni sean inválidos
      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa ambos números.");
        return;
      }

      // Realizar la operación seleccionada
      switch (operacion) {
        case "sumar":
          resultado = num1 + num2;
          break;
        case "restar":
          resultado = num1 - num2;
          break;
        case "multiplicar":
          resultado = num1 * num2;
          break;
        case "dividir":
          if (num2 === 0) {
            alert("No se puede dividir entre cero.");
            return;
          }
          resultado = num1 / num2;
          break;
        default:
          resultado = "Operación no válida";
      }

      // Mostrar el resultado en pantalla
      document.getElementById("resultado").textContent = resultado;
    }
  