import React from "react";
import "./lux.css";
import { Navigate, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import RecipeList from "./components/RecipeList";

function App() {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path='/' element={<Navigate to='/recipes' />} />
                    <Route path='/recipes' element={<Main />} />
                    <Route path='/recipes/:ingredient' element={<RecipeList />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
