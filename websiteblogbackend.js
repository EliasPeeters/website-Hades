const express = require('express');

app = express();

// routes
let statusRoute = require('./routes/statusRoute');
let articleRoute = require('./routes/articleRoute')

app.listen(8083, () => {
    console.log(`App running on 8083`)
})