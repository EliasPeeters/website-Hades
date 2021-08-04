app.get('/article/:name', function(req, res) {
    res.render(req.params.name)
    //res.send(req.params.name)
})