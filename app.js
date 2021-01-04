//requires
const path = require('path');
const express = require('express');
const app = express();

console.log('Corriendo NODE');

app.use(express.static('public'));

app.listen(3000,()=>{console.log("servidor funcionando")});

app.get('/',(req,res)=>{ 
    res.sendFile(path.join(__dirname,'/views/index.html'));
});
app.get('/home',(req,res)=>{ 
    res.sendFile(path.join(__dirname,'/views/index.html'));
});

app.get('/register',(req,res)=>{ 
    res.sendFile(path.join(__dirname,'/views/register.html'));
});

app.get('*',(req,res)=>{
    res.send('404 no se encontro la pagina buscada');
});
