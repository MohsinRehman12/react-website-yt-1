const express = require ('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kentrell_bookstore'
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());


app.get("/api/get", (req, res) => {
    const sqlSelect = "Select * from book where genre like '%fantasy%';";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result);
    })
})

app.get("/api", (req, res) => {
    res.send("test")
})

app.listen(5000, () => {console.log("Server started on port 5000")})