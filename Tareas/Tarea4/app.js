let btn = document.getElementById("boton");
let numero = document.getElementById("numero");
let mensaje = document.getElementById("mensaje");
let divqr = document.getElementById("div-qr");
document.getElementById("formulario").addEventListener("submit",(event)=>{
    event.preventDefault();
    let msg = encodeURIComponent(mensaje.value);
    console.log(msg);
    let linkWpp=`https://api.whatsapp.com/send?phone=${numero.value}&text=${msg}`;
    console.log(encodeURIComponent(linkWpp));
    let linkQR="https://api.qrserver.com/v1/create-qr-code/?size_250x250&data="+encodeURIComponent(linkWpp);
    divqr.innerHTML=`<img src="${linkQR}">`;
});