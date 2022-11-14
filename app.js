const express = require('express');
const app = express();
app.use(express.static('public'));

let PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log('Funcionando en el Puerto ' + PORT);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/product', (req,res)=>{
    res.sendFile(__dirname + '/views/product.html');
});