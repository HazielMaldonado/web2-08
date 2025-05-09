const express = require('express');
const path = require('path');
const routes = require('./routes/routes');


const app = express();
const port = 3024;
// Sirve para arhivos estaticos en css, img,etc
app.use(express.static(path.join(__dirname,"public")));

app.get("/", routes);

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});
