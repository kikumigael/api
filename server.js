//--------CREATION DU SERVER -------
// importation d'express
const express = require('express'); 
// init express
const app = express();

app.listen(3500, function(){
    console.log('server startrd successfuly');
});
var a=25;
var b = 25;
app.get('/gael', function(req,res){
    res.send('Hello GAGU GAEL' +(a+b));
});

app.get('/isig', function(req,res){
    res.send('fIER ET PLEIN DE DIGNITE');
});


