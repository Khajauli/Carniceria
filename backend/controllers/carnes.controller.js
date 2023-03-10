'use strict'
var Carne=require('../models/carne');
var fs=require('fs');
var path=require('path');
const { exists } = require('../models/carne');
var controller={
    getInicio:function(req,res){
        return res.status(201).send(
            "<h1>Hola<h1>"
        );
    },
    saveCarne:function(req,res){
        var carne=new Carne();
        var params=req.body;
        carne.nombre=params.nombre;
        carne.tipo=params.tipo;
        carne.expiracion=params.expiracion;
        carne.entrega=params.entrega;
        carne.imagen=null;
        carne.save((err,carneGuardada)=>{
            if(err) return res.status(500).send({message:"Error al guardar"});
            if(!carneGuardada) return res.status(404).send({message:'No se ha guardado la carne indicada'});
            return res.status(200).send({carne:carneGuardada});
        })
    },
    getCarnes:function(req,res){
        Carne.find({}).sort().exec((err,carnes)=>{
            if(err) return res.status(500).send({message:"Error al recuperar los datos"});
            if(!carnes) return res.status(404).send({message:'No existe un listado de carnes'});
            return res.status(200).send({carnes});
        })
    },
    getCarne:function(req,res){
        var carneId=req.params.id;
        if(carneId==null) return res.status(4004).send({message:"La carne no existe"});
        Carne.findById(carneId,(err,carne)=>{
            if(err) return res.status(500).send({message:"Error al recuperar los datos"});
            if(!carne) return res.status(404).send({message:'No existe la carne buscada'});
            return res.status(200).send({carne});
        })
    },
    nombreCarne:function(req,res){
        var nombre=req.params.nombre;
        if(nombre==null) return res.status(4004).send({message:"La carne no existe"});
        Carne.find({nombre},(err,carne)=>{
            if(err) return res.status(500).send({message:"Error al recuperar los datos"});
            if(!carne) return res.status(404).send({message:'No existe la carne buscada'});
            return res.status(200).send({carne});
        })
    },
    deleteCarne:function(req,res){
        var carneId=req.params.id;
        if(carneId==null) return res.status(4004).send({message:"La carne no existe"});
        Carne.findByIdAndRemove(carneId,(err,carneBorrada)=>{
            if(err) return res.status(500).send({message:"Error al eliminar los datos"});
            if(!carneBorrada) return res.status(404).send({message:'No se puede eliminar la carne'});
            return res.status(200).send({carneBorrada});
        })
    },
    updateCarne:function(req,res){
        var carneId=req.params.id;
        var update=req.body;
        if(carneId==null) return res.status(4004).send({message:"La carne no existe"});
        Carne.findByIdAndUpdate(carneId,update,{new:true},(err,carneActualizada)=>{
            if(err) return res.status(500).send({message:"Error al actualizar los datos"});
            if(!carneActualizada) return res.status(404).send({message:'No se puede actualizar la carne indicada'});
            return res.status(200).send({carneActualizada});
        })
    },
    uploadImage:function(req,res){
        var carneId=req.params.id;
        var fileName="Imagen no subida";

        if(req.files){
            var filePath=req.files.imagen.path;
            var file_split=filePath.split('\\');
            var fileName=file_split[1];
            var extSplit=fileName.split('\.');
            var fileExt=extSplit[1];
            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){
                Carne.findByIdAndUpdate(carneId,{imagen:fileName},{new:true},(err,carneActualizada)=>{
                    if (err) return res.status(500).send({message:"La imagen no se ha subido"});
                    if(!carneActualizada) return res.status(404).send({message:'La carne no existe y no se subio la imagen'});
                    return res.status(200).send({carne:carneActualizada});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:"La extension no es valida"});
                })
            }

        }else{
            return res.status(200).send({message:fileName});

        }

    },
    getImage:function(req,res){
        var file=req.params.imagen;
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if(exists) {
                return res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:"No existe la imagen"});
            }
        });
    }
    
}
module.exports=controller;