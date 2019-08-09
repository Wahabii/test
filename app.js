const winston=require('winston');
//const jwt=require('jsonwebtoken');

const express=require('express');
const app=express();

require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port= 4000;
app.listen(port,()=> winston.info(`connected with port ${port} ...`));