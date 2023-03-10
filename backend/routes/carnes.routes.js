'use strict'
var express=require('express');
var router=express.Router();
var  carnesRouter= require('../controllers/carnes.controller');
var multiparty=require('connect-multiparty');
var multupartyMiddleWare=multiparty({uploadDir:'./uploads'});

router.get('/inicio',carnesRouter.getInicio);
router.post('/guardar-carne',carnesRouter.saveCarne);
router.get('/carnes',carnesRouter.getCarnes);
router.get('/carne/:id',carnesRouter.getCarne);
router.get('/nombre-carne/:nombre',carnesRouter.nombreCarne);
router.put('/carne/:id',carnesRouter.updateCarne);
router.delete('/carne/:id',carnesRouter.deleteCarne);
router.post('/subir-imagen/:id',multupartyMiddleWare,carnesRouter.uploadImage);
router.get('/get-imagen/:imagen',carnesRouter.getImage);


module.exports=router; 