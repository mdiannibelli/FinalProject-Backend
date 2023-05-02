import express from "express"
import { ContenedorDaoProductos } from '../../dbOperations/daos/fabric.js';
import {UserModel} from "../../dbOperations/models/user.js"


const router = express.Router();
const productosService = ContenedorDaoProductos;

const newDate = () =>{
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = mm+'-'+dd+'-'+yyyy;
    return today
}

router.get('/', async (req, res) =>{
    const productos = await productosService.getAll();
    if(req.session.usuario){
        UserModel.findOne({email:req.session.usuario}, (err, usuario)=>{
            if(err){
                logger.error(err)
            }else{
                const id = usuario._id;
                res.render("products",{
                    productos:productos,
                    idUser: id.valueOf()
                })
            }
        })
    }else{
        res.json({
            productos:productos
        })
    }
})

router.get('/:id', async (req, res) => {
    try{
        const usuario = await UserModel.findOne({ email: req.session.usuario })
        if (req.session.usuario && usuario.role === "admin") {
            const id = req.params.id;
            let productos = [];
            const producto = await productosService.getById(id);
            productos.push(producto);
            res.json({
                producto: productos
            });
        } else {
            res.status(401).json({ error: "No tienes permiso para acceder a esta ruta" });
        }
    }catch{
        res.json({ error: "No tienes permiso para acceder a esta ruta" });
    }
});

router.post('/', async (req, res) =>{
    try{
        const usuario = await UserModel.findOne({ email: req.session.usuario })
        if (req.session.usuario && usuario.role === "admin") {
            const newProduct = await req.body;
            await productosService.save(newProduct)
            const productos = await productosService.getAll();
            res.json({
                productos
            })
        } else {
            res.status(401).json({ error: "No tienes permiso para acceder a esta ruta" });
        }
    }catch{
        res.json({ error: "No tienes permiso para acceder a esta ruta" });
    }
})

router.put('/:id', async (req, res) =>{
    try{
        const usuario = await UserModel.findOne({ email: req.session.usuario })
        if (req.session.usuario && usuario.role === "admin") {
            const id = req.params.id
            const newProduct = await req.body;
            newProduct.timestamp = newDate()
            await productosService.updateById(id, newProduct)
            res.json({
                producto_nuevo: newProduct
            })
        } else {
            res.status(401).json({ error: "No tienes permiso para acceder a esta ruta" });
        }
    }catch{
        res.json({ error: "No tienes permiso para acceder a esta ruta" });
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        const usuario = await UserModel.findOne({ email: req.session.usuario })
        if (req.session.usuario && usuario.role === "admin") {
            const id = req.params.id
            const producto = await productosService.getById(id)
            await productosService.deleteById(id)
            res.json({
                producto_eliminado: producto 
            });
        } else {
            res.status(401).json({ error: "No tienes permiso para acceder a esta ruta" });
        }
    }catch{
        res.json({ error: "No tienes permiso para acceder a esta ruta" });
    }
})

export {router as routerProductos};