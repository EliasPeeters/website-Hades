const fs = require('fs')

function getAttributes() {
    return JSON.parse(fs.readFileSync('assets/attributes.json'))
}

function getAttributesOneArticle(name) {
    let attributes = getAttributes();
    if (attributes[name] == null) {
        return 'Article does not exist';
    } else {
        return attributes[name]
    }
}

app.get('/attributes', function(req, res) {
    let attributes = getAttributes()
    res.send(attributes)  
})


app.get('/attributes/:name', function(req, res) {
    let attributes = getAttributesOneArticle(req.params.name);
    res.send(attributes)
})

module.exports = {getAttributes, getAttributesOneArticle}