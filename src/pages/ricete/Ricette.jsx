import{ useState, useEffect } from "react";
import { client } from "../../sanityClient";
import { Link } from "react-router-dom";
import "./Ricette.css";


function ShowRecipes() {
      const [recipes, setRecipes] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        client.fetch(`*[_type == "recipe"]{
               _id,
                title
                }`)
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

      if (loading) return <div>Loading...</div>;

      const groupedRecipes = recipes.reduce((groups, recipe) => {
         const firstLetter = recipe.title[0].toUpperCase();
         if (!groups[firstLetter]) {
            groups[firstLetter] = [];
         }
         groups[firstLetter].push(recipe);
         return groups;
      }, {});

       const letters = Object.keys(groupedRecipes).sort();
 return(
   <div className="ricette-page">
   <h1 className="ricette-title">Ricette</h1>

   <div className="letters-menu">
      {letters.map((letter) => (
         <a key={letter} href={`#${letter}`}>{letter}</a>
      ))}
   </div>

   {letters.map((letter) => (
      <div key={letter} id={letter} className="letter-group">
         <h2>{letter}</h2>

         <ul>
            {groupedRecipes[letter]
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((recipe) => (
               <li key={recipe._id}>
                  <Link to={`/recipe/${recipe._id}`}>{recipe.title}</Link>
               </li>
            ))}
         </ul>
      </div>
   ))}
   </div>
 );
}
export default ShowRecipes;

