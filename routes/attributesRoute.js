const fs = require('fs')

function getAttributes(server = 'external', sort = 'date') {
    let serverAdress = server == 'external'? 'https://hades.eliaspeeters.de':'http://localhost:8083'

    let attributes = JSON.parse(fs.readFileSync('assets/attributes.json'))
    let i = attributes.articles.length;
    while (i--) {
        if (attributes.articles[i].visible == false) {
            attributes.articles.splice(i, 1)
        } else {
            attributes.articles[i].image = serverAdress + '/assets/'+ attributes.articles[i].image;

            // css linking
            if (attributes.articles[i].css != undefined) {
                for (let ii = 0; ii < attributes.articles[i].css.length; ii++) {
                    attributes.articles[i].css[ii] = `${serverAdress}/assets/css/${attributes.articles[i].css[ii]}`
                }
            } else {
                attributes.articles[i].css = []
            }

            // js linking
            if (attributes.articles[i].js != undefined) {
                for (let ii = 0; ii < attributes.articles[i].js.length; ii++) {
                    attributes.articles[i].js[ii] = `${serverAdress}/assets/js/${attributes.articles[i].js[ii]}`
                }
            } else {
                attributes.articles[i].js = []
            }
        }
    }

    if (sort == 'date') {
        attributes.articles.sort((a, b) => (a.dateUTC < b.dateUTC) ? 1 : -1);
    } else if (sort == 'date-1') {
        attributes.articles.sort((a, b) => (a.dateUTC < b.dateUTC) ? 1 : -1).reverse();
    } else if (sort == 'name') {
        attributes.articles.sort(function (a, b) {
            if (a.heading < b.heading) {retrun -1}
            if (a.heading > b.heading) {return 1}
            return 0
        })
    } else if (sort == 'name-1') {
        attributes.articles.sort(function (a, b) {
            if (a.heading < b.heading) {retrun -1}
            if (a.heading > b.heading) {return 1}
            return 0
        }).reverse()
    }
    

    return attributes
}

function getAttributesOneArticle(name, server) {
    let attributes = getAttributes(server);
    const position = attributes.articles.indexOf(name);

    let articlePostionInArray = -1
    attributes.articles.forEach(function(element, index){
        if (element.name == name) {
            articlePostionInArray = index
        }
    });
    // console.log(attributes.articles)
    if (articlePostionInArray == -1) {
        return 'Article does not exist';
    } else {
        return attributes.articles[articlePostionInArray]
    }
}

app.get('/attributes', function(req, res) {
    let server = req.query.server == 'internal' ? 'internal':'external';
    let sort = req.query.sort == null ? 'date':req.query.sort;
    
    let attributes = getAttributes(server, sort)
    res.send(attributes)  
})


app.get('/attributes/:name', function(req, res) {
    let server = req.query.server == 'internal' ? 'internal':'external';
    let attributes = getAttributesOneArticle(req.params.name, server);
    res.send(attributes)
})

module.exports = {getAttributes, getAttributesOneArticle}