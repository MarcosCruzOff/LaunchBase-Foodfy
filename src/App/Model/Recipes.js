const db = require('../../config/db')
const { date } = require('../../lib/utils')

module.exports = {
    //Seleciona todos os estudantes, e conta quantos alunos cada teacher tem
    all(callback) {
        db.query(`SELECT * FROM recipes`, function (err, results) {
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },

    create(data, callback) {
        const query = `
         INSERT INTO recipes(
            chef_id,
            image,
            title_recipe,
            ingredients,
            preparetions,
            information,
            created_at
         ) VALUES($1, $2, $3, $4, $5, $6, $7)
         RETURNING id
         `
        const values = [
            data.chef_id,
            data.image,
            data.title_recipe,
            data.ingredients,
            data.preparetions,
            data.information,
            date(Date.now()).iso,
        ]

        //Envia as informações para o banco de dados caso não aja erro
        db.query(query, values, function (err, results) {
            if (err) throw `Database Error! ${err}`

            callback(results.rows[0])
        })
    },

    //Função que faz o filtro dos estudantes pelo nome
    find(id, callback) {
        db.query(
            `
      SELECT recipes.*, chefs.name_chef AS chef_name
      FROM recipes
      LEFT JOIN chefs ON (recipes.chef_id = chefs.id)
      WHERE recipes.id = $1`,
            [id],
            function (err, results) {
                if (err) throw `Database Error! ${err}`

                callback(results.rows[0])
            },
        )
    },

    //Função que faz o filtro dos estudantes pelo nome
    update(data, callback) {
        const query = `
    UPDATE recipes SET      
      image           =($1),
      title_recipe    =($2),
      ingredients     =($3),
      preparations    =($4),
      information     =($5),
      created_at      =($6),
      chef_id         =($7)
    WHERE id          =($8)    
    `
        const values = [
            data.image,
            data.title_recipe,
            data.ingredients,
            data.preparetions,
            data.information,
            data.created_at,
            data.chef_id,
            data.id,
        ]

        db.query(query, values, function (err, results) {
            if (err) throw `Database Error! ${err}`

            callback()
        })
    },

    //Função que faz o filtro dos estudantes pelo nome
    delete(id, callback) {
        db.query(
            `DELETE FROM recipes WHERE id = $1`,
            [id],
            function (err, results) {
                if (err) throw `Database Error! ${err}`

                return callback()
            },
        )
    },

    selectChef(callback) {
        db.query(
            `
      SELECT name_chef, id FROM chefs`,
            function (err, results) {
                if (err) throw `Database Error! ${err}`

                callback(results.rows)
            },
        )
    },

    //Função que faz a paginação
    paginate(params) {
        const { filter, limit, offset, callback } = params

        let query = '',
            filterQuery = '',
            totalQuery = `(
          SELECT count (*) FROM recipes
        ) AS total`

        if (filter) {
            filterQuery = `
        WHERE recipes.title_name ILIKE '%${filter}%'
      `
            totalQuery = `(
        SELECT count (*) FROM recipes
        ${filterQuery}
      ) AS total`
        }

        query = `
      SELECT recipes.*, ${totalQuery}
      FROM recipes
      ${filterQuery}
      LIMIT $1 OFFSET $2
    `
        db.query(query, [limit, offset], function (err, results) {
            if (err) throw `Database Error! ${err}`

            callback(results.rows)
        })
    },
}
