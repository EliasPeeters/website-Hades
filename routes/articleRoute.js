const { RSA_NO_PADDING } = require('constants');
const fs = require('fs');
let attributesRoute = require('./attributesRoute');

function sendArticle(req, res) {
    let server = req.query.server;
    let attributes = attributesRoute.getAttributesOneArticle(req.params.name, server);
    if (attributes == 'Article does not exist') {
        res.send(attributes);
        return;
    }
       
    res.render(`article/${req.params.name}`, {attributes: attributes, articleName: req.params.name}, (err, html) => {
        res.send({
            html: html,
            ...attributes
        })
    })
}

app.get('/article/:name', function(req, res) {
    sendArticle(req, res)
})

app.get('/hades/article/:name', function(req, res) {
    sendArticle(req, res)
})