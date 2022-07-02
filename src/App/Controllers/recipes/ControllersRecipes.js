const Recipe = require('../../Model/Recipes')
const { date, age } = require('../../../lib/utils')

module.exports = {
  //Exporta a função que mostra a página index
  index(req, res) {
    let { filter, page, limit } = req.query

    page = page || 1
    limit = limit || 20
    let offset = limit * (page - 1)

    const params = {
      filter,
      page,
      limit,
      offset,
      callback(recipes) {
        // const pagination = {
        //   total: Math.ceil(recipes[0].total / limit),
        //   page,
        // }
        // return res.render('recipes/index', {
        //   recipes,
        //   pagination,
        //   filter,
        // })
        if (recipes[0]) {
          const pagination = {
            total: Math.ceil(recipes[0].total / limit),
            page,
          }
          return res.render('manager-Recipes', {
            recipes,
            pagination,
            filter,
          })
        } else {
          return res.render(`manager-Recipes`)
        }
      },
    }

    Recipe.paginate(params)
  },

  //Renderiza a página de criar cadastro
  create(req, res) {
    Recipe.selectChef(function (options) {
      return res.render('manager-Recipes-create', { chefsOptions: options })
    })
  },

  //Exporta a função de salvar cadastro
  post(req, res) {
    // kyes retorna um Array["avatar_url","name","birth","education","services"]
    const keys = Object.keys(req.body)

    for (let key of keys) {
      if (req.body[key] == '')
        return res.send('Por favor, Preencha todos os campos')
    }

    Recipe.create(req.body, function (recipe) {
      return res.redirect(`/admin/recipes/${recipe.id}`)
    })
  },

  //Exporta a função que exibi o usuários pelo id show
  show(req, res) {
    Recipe.find(req.params.id, function (recipe) {
      if (!recipe) return res.send('Recipe not Found')

      recipe.created_at = date(recipe.created_at).format

      return res.render('manager-Recipes-show', { recipe })
    })
  },

  //Exporta a função que edita os dados do usuários
  edit(req, res) {
    Recipe.find(req.params.id, function (recipe) {
      if (!recipe) return res.send('Recipe not Found')  

      Recipe.selectChef(function (options) {
        return res.render('manager-Recipes-edit', {
          recipe,
          chefsOptions: options,
        })
      })
    })
  },

  //Exporta a função que atualizar dados dos usuários
  put(req, res) {    
    const keys = Object.keys(req.body)

    for (let key of keys) {
      if (req.body[key] == '')
        return res.send('Por favor, Preencha todos os campos')
    }

    Recipe.update(req.body, function () {
      return res.redirect(`/admin/recipes/${req.body.id}`)
    })
  },

  //Delete
  delete(req, res) {
    Recipe.delete(req.body.id, function () {
      return res.redirect(`/admin/recipes`)
    })
  },
}
