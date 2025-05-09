const express = require('express');
const router = express.Router();
const path = require('path');

//defincion de las rutas y menejadores

router.get("/",(req,res)=>{
    //res.send("Hola mundo");
    res.sendFile(path.join(__dirname,"/../index.html"));
});

// Ruta para procesar login (desde el formulario)
router.post("/login", express.urlencoded({ extended: true }), (req, res) => {
    const { user, contraseña } = req.body;

    // Validación básica (puedes mejorarla con DB, etc.)
    if (user === "admin" && contraseña === "1234") {
        res.redirect("/dashboard");
    } else if (user ==="admin" && contraseña === "admin") {
        res.redirect("/same");
    }else {
        res.redirect("/error");
    }
});
// Usuario y contraseña correcto
router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../dashboard.html"));
});

// Página de error
router.get("/error", (req, res) => {
    res.sendFile(path.join(__dirname, "../error.html"));
});

//Usuario y contraseña iguales
router.get("/same", (req, res) => {
    res.sendFile(path.join(__dirname, "../same.html"));
});

module.exports=router;

