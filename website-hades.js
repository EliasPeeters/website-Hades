const express = require('express');
const bodyParser = require('body-parser');
let mysqlSetup = require('./mysqlSetup');
let credentialsLoader = require('./getCredentials');

app = express();
credentials = credentialsLoader.getCredentials();
connection = mysqlSetup.getConnection();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));
app.use('/hades/assets', express.static('assets'))

// routes
let statusRoute = require('./routes/statusRoute');
let articleRoute = require('./routes/articleRoute');
let attributesRoute = require('./routes/attributesRoute');

app.listen(8083, () => {
    console.log(`App running on 8083`)
})