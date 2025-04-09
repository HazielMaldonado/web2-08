Objetos del DOM usados en el proyecto
Método de DOM	¿Qué hace?
getElementById(id)	Busca un elemento HTML por su ID
.value	Obtiene o cambia el contenido de un input
.textContent	Cambia el texto visible de un elemento
createElement(tag)	Crea un nuevo elemento HTML
appendChild(elemento)	Inserta el elemento dentro de otro

✅ 1. Acceder a elementos del HTML con getElementById
const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
¿Qué hace?
document.getElementById("num1") accede al input del primer número.
.value obtiene el valor que el usuario escribió.
parseFloat(...) convierte ese valor (texto) a número decimal.
Esto es acceder a un nodo del DOM (el input) y leer su valor.

✅ 2. Modificar contenido con textContent
document.getElementById("resultado").textContent = resultado;
¿Qué hace?
Encuentra el elemento <span id="resultado"> en el HTML.
Le cambia su texto al nuevo resultado calculado.
Si antes decía Resultado: -, ahora dirá Resultado: 15, por ejemplo.

✅ 3. Crear elementos nuevos con createElement
const nuevaLinea = document.createElement("p");
nuevaLinea.textContent = `${num1} ${signo} ${num2} = ${resultado}`;
¿Qué hace?
createElement("p") crea un nuevo párrafo (etiqueta <p>) en el DOM.
Le asignamos contenido usando .textContent.
Aquí estamos creando un nuevo nodo del DOM desde JavaScript.

✅ 4. Insertar elementos al DOM con appendChild
document.getElementById("historial").appendChild(nuevaLinea);
¿Qué hace?
Busca el <div id="historial">.
Le agrega el nuevo <p> que contiene el resultado.
Así se va construyendo el historial de operaciones, línea por línea.

✅ 5. Modificar atributos (como el valor del input)
Aunque no lo hicimos aún, podríamos borrar los campos después de calcular:
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
Esto modifica un atributo del DOM (el valor del input).

