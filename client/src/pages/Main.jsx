import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeList from "../components/RecipeList";

function Main() {
    const [item, setItem] = useState("")
    const [recipes, setRecipes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     const controller = new AbortController();
    //     axios
    //         .get(`http://localhost:5001/recipes/${item}`, { signal: controller.signal })
    //         .then((res) => {
    //             console.log(res.data);
    //             setRecipes(res.data);
    //             setLoaded(true);
    //         })
    //         .catch((err) => console.log(err));
    //     return () => controller.abort();
    // }, [loaded]);

    const handleSubmit = (e) => {
      e.preventDefault();
      setItem('')
      axios
        .get(`http://localhost:5001/recipes/${item}`)
        .then(res => {
          console.log(res.data);
          setLoaded(true);
          setRecipes(res.data);
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="card">
                <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                    <label htmlFor="recipe" className="form-label mt-3">
                        <h1>Find a recipe: </h1>
                    </label>
                    <input
                        type="text"
                        name="recipe"
                        id="recipe"
                        className="form-control mb-3 w-50"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </form>
            </div>
            {loaded && <RecipeList recipes={recipes} setLoaded={setLoaded} />}
        </div>
    );
}

export default Main;
