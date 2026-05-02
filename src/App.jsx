import Home from "./pages/home/Home";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Ricette from './pages/ricete/Ricette';
import Contatti from './pages/contatti/contatti';
import NavBar from './components/navbar/navbar';
import RecipesDetail from "./pages/recipe/RecipeDetails";
import {useState} from "react";
import './App.css';

function App() {

  const [search,setSearch] =useState("");

  return (
    <BrowserRouter>
    <NavBar search={search} setSearch={setSearch}/>
     <div className="page">

      <Routes>
          <Route path="/" element={<Home search={search} setSearch={setSearch} />} />
          <Route path="/recipe/:id"element={<RecipesDetail />} />
          <Route path='/ricette' element={<Ricette />}/> 
          <Route path='/contatti' element={<Contatti />}/> 
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
