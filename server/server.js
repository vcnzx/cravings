const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors(), express.json());

const recipeRouter = require('./routes/recipe.routes');
app.use('/', recipeRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`))