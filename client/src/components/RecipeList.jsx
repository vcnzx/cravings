import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({recipes, setLoaded}) {


    
  return (
    <div className="d-flex justify-content-center flex-wrap gap-3">
        {
        recipes &&
        recipes.map((recipe) => {
            return (
    
                    <div key={ recipe.id }className="card mb-2 mt-2">
                        <div className="card-header">{recipe.title}</div>
                        <div className="card-body">
                            <img src={`${recipe.image}`} alt={`${recipe.title}`} />
                        </div>
                    </div>
    
            )
        })
        }
    </div>
  )
}

export default RecipeList