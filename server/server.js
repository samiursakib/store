const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'store-api'
});

db.connect((err) => {
    if(err) { return console.log(err) };
    console.log('database connected');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));














app.get('/api/customer', (req, res) => {
    const sql = 'SELECT * FROM customers';
    db.query(sql, (err, result) => {
        if(err) { return console.log(err); }
        res.json(result);
    });
});

app.post('/api/customer', (req, res) => {
    const { username, email, address } = req.body;
    const password = '';
    const sql = 'INSERT INTO customers (username, email, password, address) VALUES (?, ?, ?, ?)';
    db.query(sql, [username, email, password, address], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.put('/api/customer/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, address } = req.body;
    const sql = 'UPDATE customers SET username = ?, email = ?, address = ? WHERE id = ?';
    db.query(sql, [username, email, address, id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.delete('/api/customer/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM customers WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});













app.get('/api/product', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, result) => {
        if(err) { return console.log(err); }
        res.json(result);
    });
});

app.post('/api/product', (req, res) => {
    const { name, image, price, description } = req.body;
    const sql = 'INSERT INTO products (name, image, price, description) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, image, price, description], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.put('/api/product/:id', (req, res) => {
    const { id } = req.params;
    const { name, image, price, description } = req.body;
    const sql = 'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?';
    db.query(sql, [name, price, description, id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.delete('/api/product/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM products WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});












app.get('/api/order', (req, res) => {
    const sql = 'SELECT o.id, c.username, c.email, p.name, p.price, o.quantity, p.price * o.quantity AS bill, o.time FROM orders o LEFT JOIN products p ON o.product_id = p.id LEFT JOIN customers c ON o.customer_id = c.id';
    db.query(sql, (err, result) => {
        if(err) { return console.log(err); }
        res.json(result);
    });
});

app.post('/api/order', (req, res) => {
    const { customerId, productId, quantity } = req.body;
    const sql = 'INSERT INTO orders (customer_id, product_id, quantity) VALUES (?, ?, ?)';
    db.query(sql, [customerId, productId, quantity], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.put('/api/order/:id', (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    const sql = 'UPDATE orders SET quantity = ? WHERE id = ?';
    db.query(sql, [quantity, id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.delete('/api/order/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM orders WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});














app.get('/api/supplies', (req, res) => {
    const sql = 'SELECT b.id, a.username, p.name, b.quantity, b.time FROM suppliers a, supplies b, products p WHERE a.id = b.supplier_id AND p.id = b.product_id ORDER BY b.time DESC';
    db.query(sql, (err, result) => {
        if(err) { return console.log(err); }
        res.json(result);
    });
});

app.post('/api/supplies', (req, res) => {
    const { supplierId, productId, quantity } = req.body;
    const sql = 'INSERT INTO supplies (supplier_id, product_id, quantity) VALUES (?, ?, ?)';
    db.query(sql, [supplierId, productId, quantity], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.put('/api/supplies/:id', (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    const sql = 'UPDATE suppliers SET username = ?, email = ? WHERE id = ?';
    db.query(sql, [username, email, id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});

app.delete('/api/supplies/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM suppliers WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if(err) { return console.log(err) }
        res.json(result);
    });
});







app.listen(3001, () => console.log('app listening on 3001'));



/*

SELECT o.id, c.username, c.email, p.name, p.price, o.quantity, p.price * o.quantity AS bill, o.time
FROM orders o, customers c, products p
WHERE c.id = o.customer_id AND p.id = o.product_id
ORDER BY o.time DESC

*/