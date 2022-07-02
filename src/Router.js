const express = require('express')
const recipesWeb = require('./data')
const chefsWeb = require('./App/Controllers/chefs/chef')

const recipe = require('./App/controllers/recipes/recipes')
//const chef = require('./App/Controllers/chefs/chef')

const controllersChef = require('./App/Controllers/chefs/ControllersChefs')
const controllersRecipe = require('./App/Controllers/recipes/ControllersRecipes')

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


router.get('/chefs', chefsWeb.index)

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
router.get('/admin/chef', controllersChef.index)

// Mostrar formulário de nova receita
router.get('/admin/chef/create', controllersChef.create)

// Exibir detalhes de uma receita
router.get('/admin/chef/:id', controllersChef.show)

// Mostrar formulário de edição de receita
router.get('/admin/chef/:id/edit', controllersChef.edit)

// Cadastrar nova receita
router.post('/admin/chef', controllersChef.post)

// Editar uma receita
router.put('/admin/chef', controllersChef.put)

// Deletar uma receita
router.delete('/admin/chef', controllersChef.delete)

// Mostrar a lista de receitas
router.get('/admin/recipes', controllersRecipe.index)

// Mostrar formulário de nova receita
router.get('/admin/recipes/create', controllersRecipe.create)

// Exibir detalhes de uma receita
router.get('/admin/recipes/:id', controllersRecipe.show)

// Mostrar formulário de edição de receita
router.get('/admin/recipes/:id/edit', controllersRecipe.edit)

// Cadastrar nova receita
router.post('/admin/recipes', controllersRecipe.post)

// Editar uma receita
router.put('/admin/recipes', recipe.put)

// Deletar uma receita
router.delete('/admin/recipes', recipe.delete)

module.exports = router
