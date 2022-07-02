const fs = require('fs')
const database = require('../../json/database.json')

exports.index = function (req, res) {
    return res.render('manager-Recipes', { recipes: database.recipes })
}

//Exporta a função de salvar
exports.post = function (req, res) {
    const keys = Object.keys(req.body)
    for (let key of keys) {
        if (req.body[key] == '')
            return res.send('Por favor, Preencha todos os campos')
    }
    // Destruturando o req.body
    let {
        image,
        title_recipe,
        author,
        ingredients,
        preparetions,
        information,
    } = req.body

    //Inserindo um id (identificador único do instrutor) no arquivo database.json
    const id = Number(database.recipes.length)

    //inicia com uma chave de nome recipes, sendo um Array vazio {"recipes": []}
    // e inseri novos dados no arquivo databasebase.json [{...}]
    database.recipes.push({
        id,
        image,
        title_recipe,
        author,
        ingredients,
        preparetions,
        information,
    })
    fs.writeFile(
        'database.json',
        JSON.stringify(database, null, 2),
        function (err) {
            if (err) return res.send('Write file error!')
            return res.redirect('/admin/recipes')
        },
    )
}

//Exporta a função de criar cadastro
exports.create = function (req, res) {
    return res.render('manager-Recipes-create', {})
}

//Exporta a função que exibi o usuários pelo id show
exports.show = function (req, res) {
    //req.params.id = /:id
    const { id } = req.params

    //Variável que busca dentro do arquivo database.JSON o Arry de objeto "recipes"
    const encontrarReceita = database.recipes.find(function (recipes) {
        return recipes.id == id
    })

    if (!encontrarReceita) return res.send('receita não encontrada')

    const recipe = {
        ...encontrarReceita,
        // age: age(encontrarReceita.birth),
        // services: encontrarReceita.services.split(','),
        // created_at: new Intl.DateTimeFormat('pt-BR').format(
        //   encontrarReceita.created_at
        // )
    }

    //Renderiza a pagina show e envia os dados que a variável encontrarReceita
    //buscou do databasebase.JSON para o front-end
    return res.render('manager-Recipes-show', { recipe })
}

//Exporta a função que edita os dados do usuários
exports.edit = function (req, res) {
    //req.params.id = /:id
    const { id } = req.params

    //Variável que busca dentro do arquivo database.JSON o Arry de objeto "instrutores"
    const encontrarReceita = database.recipes.find(function (recipes) {
        return recipes.id == id
    })

    if (!encontrarReceita) return res.send('Receita não encontrado')

    //Retorna day--month--year
    const recipe = {
        ...encontrarReceita,
        //birth: date(encontrarReceita.birth).iso
    }

    return res.render('manager-Recipes-edit', { recipe })
}

//Exporta a função que atualizar dados dos usuários
exports.put = function (req, res) {
    //req.body.id = /:id
    const { id } = req.body

    let index = 0

    //Variável que busca dentro do arquivo database.JSON o Arry de objeto "instrutores"
    const encontrarReceita = database.recipes.find(function (
        recipe,
        encontarIndex,
    ) {
        if (recipe.id == id) {
            index = encontarIndex
            return true
        }
    })

    if (!encontrarReceita) return res.send('Receita não encontrada')

    const recipe = {
        ...encontrarReceita,
        ...req.body,
        id: Number(req.body.id),
    }

    database.recipes[index] = recipe

    fs.writeFile(
        'database.json',
        JSON.stringify(database, null, 2),
        function (err) {
            if (err) return res.send('Write error')

            return res.redirect(`/admin/recipes/${id}`)
        },
    )
}

//Delete
exports.delete = function (req, res) {
    const { id } = req.body

    const filtraReceitas = database.recipes.filter(function (recipe) {
        return recipe.id != id
    })

    database.recipes = filtraReceitas

    fs.writeFile(
        'database.json',
        JSON.stringify(database, null, 2),
        function (err) {
            if (err) return res.send('write Error')

            return res.redirect('/admin/recipes')
        },
    )
}
