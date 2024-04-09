const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Middleware CORS
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "akun"
});

// Menambahkan Middleware CORS sebelum menentukan rute endpoint
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/akun', (req, res) => {
    const sql = "INSERT INTO loginuser ('nama', 'email', 'password') VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

const port = 8080; // Ubah ke port yang Anda inginkan

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
