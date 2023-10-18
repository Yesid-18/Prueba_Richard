const Nota = require("../models/Nota");

exports.crearNota = async (req, res) =>{
    
    try {
        let nota;

        nota = new Nota(req.body);

       await nota.save();
        res.send(nota);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error de nota');
    }
}
exports.obtenerNota = async (req, res) =>{

    try {
        
        const notas = await Nota.find()
        res.json(nota)
    } catch (error) {
        console.log(error);
        res.status(500).send('Error de nota');
    }
}

exports.actualizarNota = async (req, res) =>{
    try {
        const {nombre, titulo, contenido, fecha} = req.body;
        let nota = await Nota.findById(req.params.id);
        
        if(!nota)  {
            res.status(404).json({msg: 'No existe una nota'})
        }
        nota.nombre = nombre;
        nota.nombre = titulo;
        nota.nombre = contenido;
        nota.nombre = fecha;

        nota = await Nota.findOneUpdate({ _id: req.params.id },nota,  {new: true})
        res.json(nota);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error de nota');
    }
}

exports.obtenerNotas = async (req, res) =>{
    try {
        let nota = await Nota.findById(req.params.id);
        
        if(!nota)  {
            res.status(404).json({msg: 'No existe una nota'})
        }
      
        res.json(nota);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error de nota');
    }
}

exports.eliminarNota = async (req, res) =>{
    try {
        let nota = await Nota.findById(req.params.id);
        
        if(!nota)  {
            res.status(404).json({msg: 'No existe una nota'})
        }

        await Nota.findOneAndRemove({ _id: req.params.id})
        res.json({msg: 'Card nota eliminada'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Error de nota');
    }
}