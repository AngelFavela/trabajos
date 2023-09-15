const express = require('express');
const router = express.Router();
const model = require('../models/ventas')();
const Venta = require('../models/ventas')

router.get('/', async (req,res)=>{
    const datos = await Venta.find();
    console.log(datos);
    res.render('index.ejs',
        {
            datos
        });
    
});
module.exports = router;

 