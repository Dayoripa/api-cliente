const Cliente = require("./../models/Cliente");

exports.obtenerClientes = (req, res)=>{
    const clientes = [
        {
            "nombre": "Daulin",
            "correo": "daulin@gmail.com"
        },
        {
          "nombre": "Lucas",
          "correo": "lucas@gmail.com"
        },
    ]
    res.json(clientes)
};

exports.agregarClientes = async(req, res) =>{
    try {
        const {nombre, correo} = req.body;
        console.log(nombre)

        if(nombre && correo){
            const nuevoCliente = new Cliente({ nombre, correo })
            await nuevoCliente.save();
            res.json({
                status: 'ok',
                code: 200,
                message: 'Documento insertado correctamente', id: nuevoCliente._id
            });
        }else{
            res.json({
                status: 'error',
                code: 400,
                message: 'Los datos son requeridos'
            })
        }

    }catch (error) {
        res.json(error)
    }
};

exports.actualizarClientes = (req, res) =>{
    const id = req.params.id;
    console.log(id)
    res.json("id recibido para actualizar")
};

exports.eliminarClientes = (req, res) =>{
    const id = req.params.id;
    console.log(id)
    res.json("id recibido para eliminar")

}