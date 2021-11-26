const express = require('express');
const app = express.Router();

app.get('/create',(req,res)=>{
    res.send('The create page');
});


module.exports = app