const express = require('express'); //direcciones que nos dirigen a una parte especifica
const router = express.Router();

const model = require('../model/valores')();
const valuedb = require('../model/valores'); //-> valores que esta extrauen

router.get('/',async(req,res) =>{
    const valores = await valuedb.find();
    console.log(valores);
    res.render('index.ejs',{
        valores
    });//variable que obtiene los valores de MongoDB
});

router.post('/add',async(req,res) =>{
    const valor = new valuedb(req.body);
    await valor.save();
    res.redirect('/');
});

router.delete('/del',async(req,res)=>{
    const valor = new valuedb(req.body);
    await valor.deleteOne();
    res.redirect('/')
})

module.exports=router;




