const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./Router')

const methodOverride = require('method-override')

const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(methodOverride('_method'))

server.set('view engine', 'njk')
nunjucks.configure(['src/views/web', 'src/views/admin'], {
    express: server,
    autoescape: true,
    watch: true,
    noCache: true,
})

//Usando as rotas
server.use(router)

server.listen(4000, function () {
    console.log('server up!')
})
