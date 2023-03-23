const express = require('express')
const products = require('./controllers/products')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// Middleware
app.
    use(express.json());

// Actions
app
    .get('/', (req, res) => {
        res.send('Hello World! From Express')
    })
    .use('/products', products)



    app.listen(port, () => 
      console.log(`Server running at http://${hostname}:${port}/`)
      );