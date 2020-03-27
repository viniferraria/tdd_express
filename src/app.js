require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : 'env'
})

// const express = require('express');
import express from 'express';

class AppController {
    constructor() {
        this.express = express();

        this.middlewares;
        this.routes;
    }

    middlewares() {
        this.express.use(json());
    }

    routes() {
        this.express.use(require('./routes').default);
    }
}


module.exports = new AppController().express;