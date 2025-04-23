const express = requiere("express");
const path = requiere("path");

const app = express();

app.get("/",(req,res)=>{
    req.sendFile(path.join(__dirname+"/index.html"))
});



const port=3005;
app.listen(port,()=>{
    console.log('El servidor esta por el puerto http://localhost:$(port)')
})

