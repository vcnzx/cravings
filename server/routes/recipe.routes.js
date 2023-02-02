const { findAll } = require("../controllers/recipe.controller")

const express = require('express');
const recipeRouter = express.Router();

const axios = require('axios');

recipeRouter.route("/recipes/:item")
    .get(findAll)

module.exports = recipeRouter;