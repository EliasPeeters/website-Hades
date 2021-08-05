const fs = require('fs');
let attributesRoute = require('./attributesRoute')

app.get('/article/:name', function(req, res) {
    try {
        fs.readFileSync(`views/${req.params.name}.ejs`)
    } catch {
        res.send('404: That article does not exist')
    }
    let attributes = attributesRoute.getAttributesOneArticle(req.params.name);
    let header = `<p class="date">${attributes.date}</p>
    <h1>${attributes.heading}</h1>
    `
    res.render(req.params.name, {header: header})
})