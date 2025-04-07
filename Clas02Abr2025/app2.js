console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb".textContent));
console.log(document.getElementById("tituloWeb"));

function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
  }
