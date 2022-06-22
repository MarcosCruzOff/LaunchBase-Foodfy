const express = require('express')
const recipesWeb = require('./data')

const recipe = require('./src/controllers/recipes')
const chef = require('./src/controllers/chef')

const router = express.Router()

// Especificando as rotas do usuário comum

// redireciona para o caminho /foodfy que será nossa "home" do site
router.get('/', function (req, res) {
    return res.redirect('/foodfy')
})

router.get('/foodfy', function (req, res) {
    return res.render('index')
})

router.get('/about', function (req, res) {
    return res.render('about')
})

router.get('/recipes', function (req, res) {
    return res.render('recipes-web', { items: recipesWeb })
})

router.get('/recipe-details', function (req, res) {
    const id = req.query.id
    const recipe = recipesWeb.find(function (recipe) {
        if (recipe.id == id) {
            return true
        }
    })
    if (!recipe) {
        return res.send('Receita não encontrada')
    }

    return res.render('recipe-web', { item: recipe })
})

// Especificando as rotas do Administrador
// Mostrar formulário de nova receita
router.get('/admin/chef', chef.index)

// Mostrar formulário de nova receita
router.get('/admin/chef/create', chef.create)

// Exibir detalhes de uma receita
router.get('/admin/chef/:id', chef.show)

// Mostrar formulário de edição de receita
router.get('/admin/chef/:id/edit', chef.edit)

// Cadastrar nova receita
router.post('/admin/chef', chef.post)

// Editar uma receita
router.put('/admin/chef', chef.put)

// Deletar uma receita
router.delete('/admin/chef', chef.delete)

// Mostrar a lista de receitas
router.get('/admin/recipes', recipe.index)

// Mostrar formulário de nova receita
router.get('/admin/recipes/create', recipe.create)

// Exibir detalhes de uma receita
router.get('/admin/recipes/:id', recipe.show)

// Mostrar formulário de edição de receita
router.get('/admin/recipes/:id/edit', recipe.edit)

// Cadastrar nova receita
router.post('/admin/recipes', recipe.post)

// Editar uma receita
router.put('/admin/recipes', recipe.put)

// Deletar uma receita
router.delete('/admin/recipes', recipe.delete)

module.exports = router
