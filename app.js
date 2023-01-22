const express = require('express');
const app = express();
const connectionDb = require('./db/db.config.js');
const recipeRoutes = require('./Routes/recipes.routes.js');
const bestRecipesRoutes = require('./Routes/bestRecipes.routes.js');
const commentRoutes = require('./routes/comments.routes.js');


connectionDb();

app.use(express.json());
app.use('/', recipeRoutes);
app.use('/', bestRecipesRoutes);
app.use('/', commentRoutes);



module.exports = app