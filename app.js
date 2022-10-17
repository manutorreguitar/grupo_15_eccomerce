const express = require ('express');
const app = express ();
const path = require ('path')
let PORT = 3000

app.use (express.static('views'))
app.use (express.static('public'))

app.listen (PORT, console.log("Listen on PORT " + PORT));

app.get ('/', (req,res)=>{
    res.sendFile (path.resolve ('./views/home.html'))
})