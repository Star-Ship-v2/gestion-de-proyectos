const express=require ('express');
const app=express();

//realizaar la conexion a la BD
const bd=require('./modelos/bd');
bd.conectar();

const puerto = 3020;

app.listen(puerto, ()=> {
    console.log(`Servicio iniciado a través de la url http://localhost:${puerto}`)
})