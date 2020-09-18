const express = require('express');

const app = express()

app.use(() => {
    console.log('Coding tiap hari');
})

app.listen(4000);
