const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL connection settings
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "NoorpreetKaur",
   database: "noor",
    port: 3306
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL database 'employee'!");
});

// Define GET API route
app.post('/api/users', (req, res) => {
  const{ name, email} = req.body;
  const sql ='INSERT INTO item(name ,email) VALUES (?,?)';
  
  connection.query(sql, [name,email] (err, results) => {
    if (err) {
      console.error("❌Insert error:", err.message);
      res.status(500).json({ error: 'Database insert error' });
    } 
    res.json({ message: '🚣‍♂️✅ user added succesfully', id result.insertId });
    });
  });
  


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});