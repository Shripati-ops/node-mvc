const express = require('express');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
let routeIndex = require('./Routers/RouteIndex');
let routeUser = require('./Routers/RouteUser');
app.use('/',routeIndex);
app.use('/users',routeUser);


app.listen(5000,(err)=>{
    console.log("app running on localhost 5000");
})