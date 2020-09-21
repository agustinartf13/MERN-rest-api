const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const authRoutes = require('./src/routers/auth');
const blogRoutes = require('./src/routers/blog');

app.use(bodyParser.json()) // type Json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization' );
    next();
})

// use router
app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

app.listen(4000);
