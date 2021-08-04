const fs = require('fs')

app.get('/article/:name', function(req, res) {
    try {
        fs.readFileSync(`views/${req.params.name}.ejs`)
    } catch {
        res.send('404: That article does not exist')
    }
    res.render(req.params.name)
})