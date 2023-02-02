const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();

apiKey = process.env.API_KEY

const findAll = (req,res) => {
    const { item } = req.params;
    axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${item}`)
        .then((recipes) => res.json(recipes.data.results))
        .catch((err) => console.log(err)); 
}

module.exports = { findAll };