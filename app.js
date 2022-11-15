const express = require ('express');
const app= express();
const path = require ('path');
const mainRouter = require('./routers/mainRouter');

app.listen (3000, ()=>{
    console.log('Server Ok')
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRouter);