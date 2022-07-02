const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./Router')

const methodOverride = require('method-override')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(methodOverride('_method'))

//Usando as rotas
server.use(router)

server.set('view engine', 'njk')
nunjucks.configure(['src/App/Views/web', 'src/App/Views/admin'], {
    express: server,
    autoescape: true,
    watch: true,
    noCache: true,
})

server.listen(4000, function () {
    console.log('server up!')
})
