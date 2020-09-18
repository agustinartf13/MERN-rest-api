const { request } = require('express');
const express = require('express');

const app = express()
const productRoutes = require('./src/routers/products');


// use router
app.use('/', productRoutes);

app.listen(4000);
