const express = require('express');
const dotenv = require('dotenv').config();
const connectToDB = require('./config/connection');

const port = process.env.PORT || 5979;

const app = express();

app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));

app.get("/", (req, res) => {
    res.json({ "name": "khanh1" });
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
    connectToDB();
})

