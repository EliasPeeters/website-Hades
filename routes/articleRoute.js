app.get('/article/:name', function(req, res) {
    res.send(req.params.name)
})