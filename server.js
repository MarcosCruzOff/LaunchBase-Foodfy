const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')
nunjucks.configure('src/views', {
    express: server,
    autoescape: true,
    watch: true,
    noCache: true,
})

//Redireciona as rotas
server.get('/', function (req, res) {
    return res.redirect('/foodfy')
})

server.get('/foodfy', function (req, res) {
    return res.render('index')
})

server.get('/about', function (req, res) {
    return res.render('about')
})

server.get('/recipes', function (req, res) {
    return res.render('recipes-web', { items: recipes })
})

server.get('/recipe-details', function (req, res) {
    const id = req.query.id
    const recipe = recipes.find(function (recipe) {
        if (recipe.id == id) {
            return true
        }
    })
    if (!recipe) {
        return res.send('Receita não encontrada')
    }

    return res.render('recipe-web', { item: recipe })
})

server.listen(4000, function () {
    console.log('server up!')
})
