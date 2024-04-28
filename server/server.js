const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "enquiry"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/', (req, res) => {
    const { name, address, phone, employee } = req.body;
    const sql = "INSERT INTO query (name, address, phone, employee) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, address, phone, employee], (error, result) => {
        if (error) {
            console.error("Error:", error);
            return res.status(500).json({ error: "Error occurred while inserting data" });
        }
        console.log("Data inserted successfully:", result);
        return res.json({ message: "Data inserted successfully" });
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081");
});
