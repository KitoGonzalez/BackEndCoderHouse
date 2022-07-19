import {Router} from 'express';

const router = Router();

const objects = [
    {
        title: "Obra de Arte Digital 1",
        price: 800.000,
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }   ,
    {
        title: "Obra de Arte Digital 2",
        price: 900.000,
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }   ,
    {
        title: "Obra de Arte Digital 3",
        price: 1000.000,
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }   ,
    ];

//devolver los objetos
router.get('/',(req,res)=>{
    res.send(objects);
})
//devolver un producto segun su ID
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    let object = objects.find(object=>object.id==id);
    if(!object) return res.status(404).send({error:"Lo busque Como loco, pero no esta aqui, proba otro id..."});
    res.send(object);
})
//modifica un objeto y lo devuelve con su ID
router.post('/',(req,res)=>{
    let object = req.body;
    if(!object.title) return res.status(400).send({error:"No se pudo agregar o modificar el objeto"});
    objects.push(object);
    res.send(object);
})
//Actualizar un objeto y lo devuelve con su ID
router.put('/:id',(req,res)=>{
    let id = req.params.id;
    let object = req.body;
    let index = objects.findIndex(object=>object.id==id);
    if(index==-1) return res.status(404).send({error:"Lo busque Como loco, pero no esta aqui, proba otro id..."});
    objects[index] = object;
    res.send(object);
})
//eliminar un Objeto por id
router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    let index = objects.findIndex(object=>object.id==id);
    if(index==-1) return res.status(404).send({error:"Lo busque Como loco, pero no esta aqui, proba otro id..."});
    objects.splice(index,1);
    res.send({message:"Objeto eliminado" + id});
})




export default router;