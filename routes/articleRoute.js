const { RSA_NO_PADDING } = require('constants');
const fs = require('fs');
let attributesRoute = require('./attributesRoute')

app.get('/article/:name', function(req, res) {
    let attributes = attributesRoute.getAttributesOneArticle(req.params.name);
    if (attributes == 'Article does not exist') {
        res.send(attributes);
        return;
    }

    let header = `<p class="date">${attributes.date}</p>
    <h1>${attributes.heading}</h1>
    `
    res.render('article', {header: header, articleName: req.params.name})
    // res.render(req.params.name, {header: header})
})