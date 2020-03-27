#!/usr/bin/env nodemon -r esm 

const app = require('./app');

app.listen(process.env.PORT || 3000);
