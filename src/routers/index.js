const express = require('express');
const router = express.Router();
const model = require('../models/ventas')();
const Venta = require('../models/ventas')

router.get('/', async (req, res) =>{
    const datos = await Venta.find();
    console.log(datos);
    res.render('index.ejs',{
        datos
    });
});


router.post('/add', async (req, res) => {
    const valor = new Venta(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
});


router.get('/del/:id', async(req,res)=>{
    const {id}=req.params;
    await Venta.findByIdAndRemove(id);
    res.redirect('/');

})


module.exports = router;

 