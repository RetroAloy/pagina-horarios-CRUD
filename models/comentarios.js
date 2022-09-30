//Mapeo Relacion Objeto 'ORM'
import Sequelize from "sequelize";
import db from '../config/db.js';

export const Comentario =db.define('comentarios',{
    correo:{
        type:Sequelize.STRING
    },
    imagen:{
        type:Sequelize.STRING

    },
    opinion:{
        type: Sequelize.STRING
    }
}, {timestamps:false});
