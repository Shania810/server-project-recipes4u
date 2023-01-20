const express = require('express');
const app = express();
const connectionDb = require('./db/db.config.js');
const recipeRoutes = require('./Routes/recipes.routes.js');

connectionDb();

app.use('/', recipeRoutes);

module.exports = app