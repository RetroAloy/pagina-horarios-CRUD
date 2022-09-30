import express from "express";
import { paginaComentarios, 
    paginaCreadores, 
    paginaInicio, 
    paginaMaterias, 
    paginaListarComentarios,
    paginaComentarioEnviado } from "../controller/paginascontroller.js";
import { eliminarComentarios, guardarComentarios, modificar } from "../controller/comentariosController.js";


const rutas =express.Router();

rutas.get("/",paginaInicio);

rutas.get("/creadores",paginaCreadores);

rutas.get("/materias",paginaMaterias);

rutas.get("/comentario_enviado", paginaComentarioEnviado);

rutas.get("/comentarios",paginaComentarios);

rutas.post("/comentarios", guardarComentarios);

rutas.get("/modificar", modificar);

rutas.get("/listar_comentarios", paginaListarComentarios);

rutas.get("/eliminar", eliminarComentarios);

export default rutas;