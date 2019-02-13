const express = require('express');
const router = express.Router();
const Jugador = require('../models/jugadores');

router.get('/', (req, res) => {
    res.send('Hello World');
});


router.post('/Jugadores', async (req, res) => {

    const NvoJugador = new Jugador({
        nick: req.body.nick,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        nacionalidad: req.body.nacionalidad,
        celular: req.body.celular
    });
    await NvoJugador.save();
    console.log('weno al menos no dio error');
    res.send('ok');

});

router.detele('/Jugadores/:id', async (req, res) => {
    const { id } = req.params
    await Jugador.remove({ _id: id })
    console.log('weno al menos no dio error');
    res.send('ok');

});


router.put('/Jugadores/:id', async (req, res) => {

    const { id } = req.params
    await Jugador.update({ _id: id }, { nick: req.body.nick,
        correo: req.body.correo,
        contrasena: req.body.contrasena,
        nacionalidad: req.body.nacionalidad,
        celular: req.body.celular});
    console.log('weno al menos no dio error');
    res.send('ok');

});



router.get('/Jugadores/:id', async (req, res) => {

    //const { id } = req.params
    const jugadores = await Jugador.find();
    console.log('weno al menos no dio error');
    res.send('ok',jugadores );

});

module.exports = router;