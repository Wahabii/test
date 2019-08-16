const express=require('express');
app=express();


app.get('/',function (req,res){

res.send('welcome to heroku');

});



const port=process.env.PORT|| 4000;

app.listen(port);