const express = require('express');
const router = express.Router();

router 
    .get('/', (req, res) => {
        res.send({
            items: [
                {
                    id:1,
                    name: 'Product 1'
                },
            ]
        })
    })
    .get('/:id', (ref, res) => {

    })
    .post('/', (req, res) => {
        res.send('Thank you for your order')
    })
    .patch('/:id', (req, res) => {
    })
    .delete('//:id', (req, res) => {
    })