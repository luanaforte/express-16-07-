const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const path = require('path')
const multer = require('multer')

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

db.connect((err) => {
    if (err) throw err
    console.log('Connected to MySQL')
})

app.use(bodyParser.urlenconded( {extended: false} ))

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))

app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/js')))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        db(null, 'public/images/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalmente)
    }
})

const upload = multer ({storage: storage})

app.get('/add_product', (req, res) => {
    res.render('add_product')
})

//adicionando produto
app.post('/add_product', upload.single('image'), (req,res) => {
    const {name, quantity, price} = req.body

    const image = req.file ? req.file.filename : null 

    if (!name || !quantity || !price || !image) {
        res.status(400).send('Todos os campos são obrigatórios')
    }

    let sql = "INSERT INTO products (nome, quantity, price, image) VALUES (?, ?, ?, ?)"

    db.query(sql, [name, quantity, price, image], (err, result) => {
        if (err) {
            throw err
        }
        console.log('Produto adicionado')
        res.redirect('/products')
    })
})

app.get('/products', (req, res) => {
    let sql = 'SELECT * FROM products'

    db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        res.render('list_products', {products: result})
    })
})

app.post('/edit_product/:id', upload.single('image'), (req, res) => {
    const {id} = req.params
    const {name, quantity, price} = req.body 
    const image = req.file ? req.file.filename : req.body.currentImage

    let sql = 'UPDATE products SET nome = ?, quantity = ?, price = ?, image = ? WHERE id = ?'

    db.querry(sql, [name, quantity, price, image, id], (err, result) => {
        if (err) {
            throw err
        } 
        console.log('Produto atualizando')
        res.redirect('/products')
    })
})

app.get('/edit_product/:id', (req, res) => {
    const {id} =req.params

    let aql = 'SELECT * FROM products WHERE id = ?'

    db.query(sql, [id], (err, result) => {
        if (err) {
            throw err
        }
        res.render('edit_product_modal', {product: result[0]})
    })
})

//realizar o delete 

app.listen(3000, () => {
    console.log('Servidor aberto')
}) 