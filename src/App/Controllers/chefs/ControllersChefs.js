const Chef = require('../../Model/Chefs')
const { date } = require('../../../lib/utils')

module.exports = {
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
            callback(chefs) {
                if (chefs[0]) {
                    const pagination = {
                        total: Math.ceil(chefs[0].total / limit),
                        page,
                    }

                    return res.render('manager-Chef', {
                        chefs,
                        pagination,
                        filter,
                    })
                } else {
                    return res.render('manager-Chef')
                }
            },
        }

        Chef.paginate(params)
    },

    create(req, res) {
        return res.render('manager-Chef-create')
    },

    post(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Por favor, Preencha todos os campos')
            }
        }

        Chef.create(req.body, function (chef) {
            return res.redirect(`/admin/chef/${chef.id}`)
        })
    },

    show(req, res) {
        Chef.find(req.params.id, function (chef) {
            if (!chef) return res.send('Chef não encontrado')

            chef.created_at = date(chef.created_at).format

            return res.render('manager-Chef-details', { chef })
        })
    },

    edit(req, res) {
        Chef.find(req.params.id, function (chef) {
            if (!chef) return res.send('Chef não encontrado')

            return res.render('manager-Chef-edit', { chef })
        })
    },

    put(req, res) {
        const keys = Object.keys(req.body)

        for (let key of keys) {
            if (req.body[key] == '') {
                return res.send('Por favor, Preencha todos os campos')
            }
        }

        Chef.update(req.body, function () {
            return res.redirect(`/admin/chef/${req.body.id}`)
        })
    },

    delete(req, res) {
        Chef.delete(req.body.id, function () {
            return res.redirect('/admin/chef')
        })
    }
}
