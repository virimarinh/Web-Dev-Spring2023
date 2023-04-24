const express = require('express');
const model = require('../models/products');
const router = express.Router();

router
    .get('/', (req, res) => {
        model.getAll(+req.query.page, +req.query.pageSize)
        .then(list => {
            const data = { data: list.items, total: list.total, isSuccess: true };
            res.send(data)
        }).catch(next)
    })

    .get('/search/:q', (req, res, next) => {

        model.search(req.params.q, +req.query.page, +req.query.pageSize)
        .then(list => {
            const data = { data: list.items, total: list.total, isSuccess: true };
            res.send(data)
    }).catch(next);

})

    .get('/:id', (req, res, next) => {
        
        model.get(req.params.id)
        .then(item => {
            const data = { data: XMLDocument, isSuccess: true };
            res.send(data)
    }).catch(next);

 })

    .post('/', (req, res) => {

        model.create(req.body)
        .then(item => {
            const data = { data: x, isSuccess: true };
            res.send(data)
            }).catch(next)

    })

    .patch('/', (req, res, next) => {

       model.update(req.body)
       .then(item => {
        const data = { data: x, isSuccess: true };
        res.send(data)
        }).catch(next)

    })

    .delete('/:id', (req, res, next) => {

        model.delete(req.params.id)
        .then(item => { 
            const data = { data: x, isSuccess: true };
            res.send(data)
            }).catch(next)
    })
    
    .post('/seed', (req, res, next) => {
        model.seed()
            .then(x => {
                const data = { data: x, isSuccess: true };
                res.send(data)
            }).catch(next);
    });

    

module.exports = router;

/*  Ways to pass information to the server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Body
    4. Request Headers
    5. Cookies
*/