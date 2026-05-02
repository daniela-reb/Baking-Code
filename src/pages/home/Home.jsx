import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../sanityClient";
import { useLocation } from "react-router-dom";
import "./Home.css"



function Home ({search,setSearch}){

    const[index, setIndex] = useState(0);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {
        setIndex(0);
    }, [location.pathname]);

    useEffect(() => {
        client.fetch(`*[_type == "recipe"]{
                title,
                slug,
                description,
                "image": image.asset->url,
                ingredients,
                instructions,
                prepTime,
                difficulty,
                category,
                _id
                }`)
            .then((data) => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (recipes.length > 0) {
            const interval = setInterval(() => {
                setIndex((prev) => (prev+1)% recipes.length);
            }, 3000);
         return () => clearInterval(interval);
        }
    },[recipes]);

    if (loading) return <div>Loading...</div>;
    if (!recipes.length) return <div>Nessuna ricetta disponibile</div>;

    const recipe = recipes[index];

    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(search.toLowerCase())
);


    return (
        <div className="container">

            {search ? (
                    <div>
                    {filteredRecipes.map((r) => (
                    <div key={r._id} onClick={() => {navigate(`/recipe/${r._id}`)
                    setSearch("")}}>
                        {r.title}
                        </div>
                ))}
                </div>
        ): ( 
            <div className="card"
          
            onClick={() => {
                setSearch("");
                navigate(`/recipe/${recipe._id}`)}}
            >
               <img src={recipe?.image || "/placeholder.jpg"} alt={recipe?.title || "Recipe"} className="image" />
            </div>
        )}
        {
            search && filteredRecipes.length === 0 && (
                <p>Nessuna ricetta trovata 😢</p>
            )}
      </div>
    );
}
export default Home;