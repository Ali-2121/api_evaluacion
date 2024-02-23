import app from './app.js';
import dataBase from './database.js'
app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando en el puerto para la tienda de ropa ${process.env.PORT}`)
})