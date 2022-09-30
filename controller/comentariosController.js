import { Comentario } from "../models/comentarios.js";

const guardarComentarios = async (req, res) => {
    const { id, correo, imagen, opinion} =req.body;
    const errores = [];
    if(correo.trim() === "") {
        errores.push({ mensaje: "El correo no debe ser vacio"});
    }
    if(imagen.trim() ==="") {
        errores.push({ mensaje: "La imagen no debe ser vacio"} );
    }

    if(opinion.trim() ===""){
        errores.push({ mensaje: "La opinion no debe estar vacia"});
    }

    if(errores.length > 0){
        res.render("comentarios", {
            pagina: "Comentarios", 
            errores,
            correo,
            imagen,
            opinion,
        });

    } else{
        console.log(id);
        if(id>0){
            //Actualizar
            console.log("actualizar");
            try {
                await Comentario.update({
                    correo, 
                    imagen,
                    opinion,
                },{where: {id:id}});
                res.redirect('/listar_comentarios');
            }   catch(error) {
                console.log(error);
            }
        }else{
        //almacenar en la base de datos
        try {
            await Comentario.create({
                correo, 
                imagen,
                opinion
            });
            res.redirect('/comentarios');
        }   catch(error) {
            console.log(error);
        }
    }
    }
};

const modificar = async (req, res) =>{
    //Con req.query.id utilizamos la llave para saber cual id y traer la informacion de ese id 
    console.log('Listo '+req.query.id)
    try {
        //findByPk hace query con el id y trae datos 
      const com=await Comentario.findByPk(req.query.id)
      console.log(com);
      //const { correo, imagen, opinion } = req.body;
      const errores = [];
      res.render("comentarios",{
        pagina: "Comentarios",
        errores,
        id:com.id,
        correo:com.correo,
        imagen:com.imagen,
        opinion:com.opinion
      });

    } catch (error) {
      console.log(error);
    }
}

const eliminarComentarios = async (req, res) => {
    console.log('Listo borrar' + req.query.id);
        //Eliminar en la base de datos
        try {
            await Comentario.destroy({
                where: {
                    id: req.query.id
                }
            });
            res.redirect("/listar_comentarios");
        }   catch(error) {
            console.log(error);
        }
    
};

export { guardarComentarios, modificar, eliminarComentarios };