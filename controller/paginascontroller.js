import {Materias} from '../models/materias.js'
import {Comentario} from '../models/comentarios.js'

const paginaInicio=(req,res)=>{
    res.render("inicio",{
        pagina:"Inicio", 
    });
}
const paginaCreadores =(req,res)=>{
    res.render("creadores",{
            pagina:"Creadores",
    });
}

const paginaMaterias =async(req,res)=>{
    //obtener registros
    const materias=await Materias.findAll({
        attributes:['nombre','creditos','imagen','descripcion']
        });
        res.render("materias",{
            pagina:"Materias",
            materias : materias
        });
}

const paginaComentarios=(req,res)=>{
    res.render("comentarios",{
        pagina:"Comentarios"
    });
}

const paginaListarComentarios =async(req,res)=>{
    //obtener registros
    const comentarios = await Comentario.findAll({
            attributes:['id','correo','imagen','opinion']
        });

        res.render("listar_comentarios",{
            pagina:"Lista de Comentarios",
            comentarios
        });
}

const paginaComentarioEnviado = async (req,res)=>{
    await res.render("comentario_enviado",{
        pagina:"Comentario Enviado"
    });
}

export{
    paginaInicio,
    paginaCreadores,
    paginaMaterias,
    paginaComentarios,
    paginaListarComentarios,
    paginaComentarioEnviado
}
    