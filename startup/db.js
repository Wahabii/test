const winston =require('winston');
const mongoose=require('mongoose');


module.exports=function(){
    mongoose.connect('mongodb://localhost/playground')
    .then(()=> winston.info('connected with mongodb'));
    

}