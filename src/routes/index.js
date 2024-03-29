const express = require('express'); //direcciones que nos dirigen a una parte especifica
const router = express.Router();

const model = require('../model/valores')();
const valuedb = require('../model/valores'); //-> valores que esta extrauen

router.get('/',async(req,res) =>{
    const valores = await valuedb.find();
    console.log(valores);
    //res.json(valores);
    res.render('index.ejs',{ //render que obtiene los valores de MongoDB
        valores
    });
    
});

router.post('/add',async(req,res) =>{
    const valor = new valuedb(req.body);
    await valor.save();
    res.redirect('/');
    //res.json(valor);
});

module.exports=router;




