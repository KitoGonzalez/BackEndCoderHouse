import express from 'express';
import productRouter from './routes/products.router.js';
import petsRouter from './routes/pets.router.js'
const app = express();

const server = app.listen(8080,()=>console.log("Now listening on 8080"))



app.use(express.json());
app.use('/api/products',productRouter);
app.use('/pets',petsRouter);
app.use(express.static('public'));






