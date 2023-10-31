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

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { producto, precio, iva } = req.query;
  
    try {
      // Utiliza findByIdAndUpdate para buscar y actualizar el registro por su ID
      const updatedVenta = await Venta.findByIdAndUpdate(id, {
        producto,
        precio,
        iva
      });
  
      if (updatedVenta) {
        // La actualización fue exitosa
        res.json({ success: true });
      } else {
        // No se encontró el registro o la actualización falló
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error al actualizar:', error);
      res.json({ success: false });
    }
  })


module.exports = router;

 