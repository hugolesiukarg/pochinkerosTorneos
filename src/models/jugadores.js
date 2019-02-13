const moongose = require('mongoose');
const Schema = moongose.Schema;

const Jugador = new Schema({
nick:String,
correo:String,
contrasena:String,
nacionalidad:String,
celular:String
})

module.exports = moongose.model('jugadores',Jugador);