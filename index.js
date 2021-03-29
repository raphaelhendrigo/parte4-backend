const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const path = require('path');
let port=5000;


app.set('view engine','pug');
app.set('views', path.join(__dirname,"views"));
app.get('/', (req,res)=>{
    res.render("index");
});
app.get('/contato', (req,res)=>{
    res.render("contato");
});
app.use(bodyparser.urlencoded({extend:false}));
app.post('/contato',(req,res)=>
{
    console.log("Usuario: "+req.body.nome);
    console.log("E-mail: "+req.body.email);
    console.log("Comentarios: "+req.body.comentario);
    res.redirect('/');
});
app.use('*', function(req,res,next)
{
    res.send("link inválido ou inexistente: 404");
    next();
});

app.listen(port,()=> console.log(`Aguardando porta ${port}`));