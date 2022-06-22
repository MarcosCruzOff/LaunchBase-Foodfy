const fs = require('fs')
const database = require('../../database.json')

exports.index = function (req, res) {
    return res.render('manager-Chef', { chefs: database.chefs })
}

//Exporta a função de salvar
exports.post = function (req, res) {
    const keys = Object.keys(req.body)
    for (let key of keys) {
        if (req.body[key] == '')
            return res.send('Por favor, Preencha todos os campos')
    }
    // Destruturando o req.body
    let { name_chef, avatar_url } = req.body

    //Inserindo um id (identificador único do instrutor) no arquivo database.json
    const id = Number(database.chefs.length)

    //inicia com uma chave de nome recipes, sendo um Array vazio {"recipes": []}
    // e inseri novos dados no arquivo databasebase.json [{...}]
    database.chefs.push({
        id,
        name_chef,
        avatar_url,
    })
    fs.writeFile(
        'database.json',
        JSON.stringify(database, null, 2),
        function (err) {
            if (err) return res.send('Write file error!')
            return res.redirect('/admin/chef')
        },
    )
}

//Exporta a função de criar cadastro
exports.create = function (req, res) {
    return res.render('manager-Chef-create')
}

//Exporta a função que exibi o usuários pelo id show
exports.show = function (req, res) {
    //req.params.id = /:id
    const { id } = req.params

    //Variável que busca dentro do arquivo database.JSON o Arry de objeto "recipes"
    const findChef = database.chefs.find(function (chef) {
        return chef.id == id
    })

    if (!findChef) return res.send('receita não encontrada')

    const chef = {
        ...findChef,
        // age: age(findChef.birth),
        // services: findChef.services.split(','),
        // created_at: new Intl.DateTimeFormat('pt-BR').format(
        //   findChef.created_at
        // )
    }

    //Renderiza a pagina show e envia os dados que a variável findChef
    //buscou do databasebase.JSON para o front-end
    return res.render('manager-Chef-details', { chef })
}

//Exporta a função que edita os dados do usuários
exports.edit = function (req, res) {
    //req.params.id = /:id
    const { id } = req.params

    //Variável que busca dentro do arquivo database.JSON o Arry de objeto "instrutores"
    const findChef = database.chefs.find(function (chef) {
        return chef.id == id
    })

    if (!findChef) return res.send('Receita não encontrado')

    //Retorna day--month--year
    const chef = {
        ...findChef,
        //birth: date(findChef.birth).iso
    }

    return res.render('manager-Chef-edit', { chef })
}

//Exporta a função que atualizar dados dos usuários
exports.put = function (req, res) {
    //req.body.id = /:id
    const { id } = req.body

    let index = 0

    //Variável que busca dentro do arquivo database.JSON o Arry de objeto "instrutores"
    const findChef = database.chefs.find(function (chef, findIndex) {
        if (chef.id == id) {
            index = findIndex
            return true
        }
    })

    if (!findChef) return res.send('Chef não encontrado')

    const chef = {
        ...findChef,
        ...req.body,
        id: Number(req.body.id),
    }

    database.chefs[index] = chef

    fs.writeFile(
        'database.json',
        JSON.stringify(database, null, 2),
        function (err) {
            if (err) return res.send('Write error')

            return res.redirect(`/admin/chef/${id}`)
        },
    )
}

//Delete
exports.delete = function (req, res) {
    //
    const { id } = req.body

    //
    const filterChef = database.chefs.filter(function (chef) {
        return chef.id != id
    })

    database.chefs = filterChef

    fs.writeFile(
        'database.json',
        JSON.stringify(database, null, 2),
        function (err) {
            if (err) return res.send('write Error')

            return res.redirect('/admin/chef')
        },
    )
}
