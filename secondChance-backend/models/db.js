// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URL
const url = process.env.MONGO_URL;

// Database instance
let dbInstance = null;

// Database name
const dbName = process.env.MONGO_DB;

async function connectToDatabase() {
    // Return existing connection if already connected
    if (dbInstance) {
        return dbInstance;
    }

    const client = new MongoClient(url);

    // Task 1: Connect to MongoDB
    await client.connect();

    // Task 2: Connect to the database specified in .env
    dbInstance = client.db(dbName);

    // Task 3: Return database instance
    return dbInstance;
}

module.exports = connectToDatabase;
