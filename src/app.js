const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//importando rutas
const indexRouter = require('./routes/index');

app.set('port',3000);

app.use('/', indexRouter);

app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});

//app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');





//conectar a base
mongoose.connect('mongodb://localhost/pochinkeros')
.then(db =>console.log('exito conecta'))
.catch(err =>console.log('error che qlia'));