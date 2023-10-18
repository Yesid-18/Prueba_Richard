const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express();
const PORT = 4000; 

connectDB();    

app.use('./api/Nota', require('./routes/nota'));
app.use(express.json());


app.listen(PORT, ()=> {
    console.log("Servidor Iniciado")
})
