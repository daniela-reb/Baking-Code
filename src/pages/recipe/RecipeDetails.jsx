import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../sanityClient";
import "./RecipeDetails.css";
import { BiCategory } from "react-icons/bi";

function RecipeDetails () {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.fetch(`*[_type == "recipe" && _id == $id][0]{
            title, 
            description,
            "image": image.asset->url,
            ingredients,
            instructions,
            prepTime,
            difficulty,
            category
            }`, {id})
            .then((data) => {
                setRecipe(data);
                setLoading(false);
            })
            .catch(console.error);
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!recipe) return <h2>Ricetta non trovata</h2>;

    return (
        <div className="recipe">

            <div className="colona">
                <div><img src ={recipe.image} /></div>
           
             <div className="ingredients">
                
                <p className="ingredienti">Ingredienti:</p>
                <ul className="ingredients">
                    {recipe.ingredients?.map((ingredient, index) => (
                        <li className="ingredient" key={index}>{ingredient}</li>
                    ))}
                </ul>
             </div>
</div>
             <div className="recipe-details">
            <h2 className="title-recipe">{recipe.title}</h2>
            <p className="descrizione">{recipe.description}</p>
            <h3 className="preparazione">Preparazione</h3>
            <p className="preparation">{recipe.instructions}</p>
            </div>

            <div className="recipe-meta">
                <span>{recipe.category}</span>
                <span>{recipe.difficulty}</span>
                <span>{recipe.prepTime} min</span>
            </div>
            
        </div>
    )
}

export default RecipeDetails;