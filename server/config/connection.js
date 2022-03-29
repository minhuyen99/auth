const mongoose = require('mongoose');
// require('dotenv').config();

const URI = "mongodb+srv://khanhnt123:imdw01Wwbp9YkgC7@locallibrary.tqsat.mongodb.net/auth-db?retryWrites=true&w=majority"

const connectToDB = async () => {
    try {
        const conn = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB;