var express=require('express');
const mongoose = require('mongoose');

var app=express();
app.get('/', function(req, res){
    res.send("Hello World");
});

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

const PORT=process.env.port||5000;
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`));