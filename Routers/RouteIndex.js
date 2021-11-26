const express = require('express');
const app = express.Router();
const appp = express();

// appp.set('views', path.join(__dirname, 'views'));
//appp.set('view engine', 'ejs');
app.get('/',(req,res)=>{
     res.render('index');
});

app.get('/greet',(req,res)=>{
    res.send('Greetings of the day');
});

app.get('/bye',(req,res)=>{
    res.send('Goodbye');
})


module.exports = app;