const express = require('express');

app = express();

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))

// routes
let statusRoute = require('./routes/statusRoute');
let articleRoute = require('./routes/articleRoute')

app.listen(8083, () => {
    console.log(`App running on 8083`)
})