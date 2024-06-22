const express = require('express');
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

app.post('/create', (req, res) => {
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})


const db = mysql.createConnection({
    host: "192.168.30.%",
    user: "root",
    password: "Vruttik8460%",
    database: "mysql"
})

app.get("/", (req, res) => {
    res.json("Hello from Backend");
})

app.listen(3001, () => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");

        return res.json(data);
    })
})