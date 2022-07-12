

import express from 'express';
import { Contenedor } from './managers/FileManager.js';

const app = express()
const oContenedor = new Contenedor();
let contadorVisitas = 0


// CONFIGURACION DEL SERVIDOR
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${server.address().port}/`)
})
server.on('error', (error) => console.log(`Server error: ${error}`))


// INDEX 
app.get('/', (req, res) => {
    contadorVisitas++
    // var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    // res.sendFile(__dirname + '/index.html')

    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Express Server - CODER Backend</title>
<link rel="stylesheet" href="css.css">


</head>
<body>
<div class="page-header" style="display: flex; justify-content: center; align-items: center">
    <h1 class="titulo">
    Express Server - CODER Back-End
    </h1>
</div>
<div style="display: flex; justify-content: center; align-items: center">
    <a href="/productos" style="margin: 0 2rem">
    <button
        type="button"
        
    >
        productos : [get '/productos']
    </button></a
    >
    <a href="/productoRandom" style="margin: 0 2rem">
    <button
        type="button"
        
    >
        producto Random : [get '/productoRandom' ]
    </button></a
    >
</div>
</br>
<div class="page-header">
    <h6 id="progress">#visitas : ${contadorVisitas}</h6>
    
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script>
</body>
</html>
    
    
    `)
    
    
})

// All Products
app.get('/productos', async (req, res) => {
    const allProducts = await oContenedor.getAll()
    res.send(allProducts)
})

// Random Product
app.get('/productoRandom', async (req, res) => {
    const allProducts = await oContenedor.getAll()
    const randomIndex = Math.floor(Math.random() * allProducts.length )
    const randomProduct = allProducts[randomIndex]
    res.send(randomProduct)
})
