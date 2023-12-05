const express = require('express');
const router = express.Router();
const { VentaModel, CuentaModel } = require('../models/ventas');

router.get('/', (req, res) => {
  res.render('login.ejs');
});

router.get('/index', async (req, res) => {
  try {
      const datos = await VentaModel.find();
      res.render('index.ejs', { datos });
  } catch (error) {
      console.error('Error al renderizar la vista:', error);
      res.status(500).send('Error en el servidor');
  }
});

router.post('/add', async (req, res) => {
    try {
        const { producto, precio, iva } = req.body;
        const nuevoProducto = new VentaModel({ producto, precio, iva });
        await nuevoProducto.save();
        res.redirect('/index');
    } catch (error) {
        console.error('Error al agregar valor:', error);
        res.status(500).send('Error en el servidor');
    }
});

router.get('/del/:id', async (req, res) => {
    const { id } = req.params;
    await VentaModel.findByIdAndRemove(id);
    res.redirect('/index');
});
router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { producto, precio, iva } = req.query;

  try {
    // Utiliza findByIdAndUpdate para buscar y actualizar el registro por su ID
    const updatedVenta = await VentaModel.findByIdAndUpdate(id, {
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
router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const { producto, precio, iva } = req.query;

  try {
    // Utiliza findByIdAndUpdate para buscar y actualizar el registro por su ID
    const updatedVenta = await VentaModel.findByIdAndUpdate(id, {
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
});

router.post('/registro', async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
      return res.render('registro.ejs', {
        error: 'Nombre, correo y contraseña son obligatorios',
      });
    }

    const nuevaCuenta = new CuentaModel({
      nombre,
      correo,
      contraseña,
    });

    await nuevaCuenta.save();
    res.render('login.ejs');
  } catch (error) {
    console.error('Error al registrar la cuenta:', error);
    res.status(500).send('Error en el servidor');
  }
});

router.post('/login', async (req, res) => {
    try {
        const { nombre, contraseña } = req.body;
        const cuenta = await CuentaModel.findOne({ nombre, contraseña });

        if (cuenta) {
            req.session.nombreUsuario = nombre;
            req.session.usuarioAutenticado = true;
            res.redirect('/index');
        } else {
            res.render('login.ejs', { error: 'Nombre o contraseña incorrectos' });
        }
    } catch (error) {
        console.error('Error al autenticar:', error);
        res.status(500).send('Error en el servidor');
    }
});

router.get('/registro', (req, res) => {
    res.render('registro.ejs');
});
router.get('/login', (req, res) => {
  res.render('login.ejs');
});
module.exports = router;

 