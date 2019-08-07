const Joi=require('joi');
const config=require('config');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
//Joi.objectId=require('joi-objectid')(Joi);
const geners=require('./router/geners');
const customers=require('./router/customers');
const movies=require('./router/movies');
const rentals=require('./router/rentals');
const users=require('./router/users');
const auth=require('./router/auth');
const express=require('express');
const app=express();
app.use(express.json());
app.use('/api/geners',geners);
app.use('/api/customers',customers);
app.use('/api/movies',movies);
app.use('/api/rentals',rentals);
app.use('/api/users',users);
app.use('/api/auth',auth);


if(! config.get('jwtPrivateKey')){

    console.log('FATAL ERORR: jwtprivatekey is not defined ');
    process.exit(1);
}

mongoose.connect('mongodb://localhost/playground')
.then(()=> console.log('connected with mongodb'))
.catch(err=> console.log('could not connect with mongodb ..'));

const port= 8000;
app.listen(port,()=> console.log(`connected with port ${port} ...`));