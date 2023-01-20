const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectionDb = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to DB: ", connection.connections[0].name);
    } catch (error) {
        console.error("Database connection error: ", error);
    }
}

module.exports = connectionDb;