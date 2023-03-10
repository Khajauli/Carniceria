'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var carneSchema = Schema({
    nombre:String,
    tipo:String,
    expiracion:String,
    entrega:String,
    imagen:String
});

module.exports=mongoose.model('Carne', carneSchema);
