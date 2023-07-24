const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const connectionDb = require('./db/db.config.js');
const recipeRoutes = require('./Routes/recipes.routes.js');
const bestRecipesRoutes = require('./Routes/bestRecipes.routes.js');
const commentRoutes = require('./Routes/comments.routes.js');


connectionDb();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', bestRecipesRoutes);
app.use('/', recipeRoutes);
app.use('/', commentRoutes);



module.exports = app