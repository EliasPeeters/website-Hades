const { RSA_NO_PADDING } = require('constants');
const fs = require('fs');
const { getConnection } = require('../mysqlSetup');
let attributesRoute = require('./attributesRoute');

async function sendArticle(req, res) {
    let server = req.query.server;
    let attributes = attributesRoute.getAttributesOneArticle(req.params.name, server);
    if (attributes == 'Article does not exist') {
        res.send(attributes);
        return;
    }
    let data = {}

    if (req.query.name == 'javaFlashcards') {
        let query = 'SELECT * FROM java_flashCards ORDER BY RAND()';
        let cards = await connection.asyncquery(query);
        for (let i = 0; i < cards.length; i++) {
            cards[i].id = i;
        }
        console.log(cards)
        data.cards = cards
    }

    console.log(req.query)
    res.render(`article/${req.params.name}`, {attributes: attributes, articleName: req.params.name, query: req.query, data: data}, (err, html) => {
        
        console.log(err);
        res.send({
            html: html,
            ...attributes
        })
    })
}

app.get('/article/:name', async function(req, res) {
    await sendArticle(req, res)
})

app.get('/hades/article/:name', async function(req, res) {
    await sendArticle(req, res)
})