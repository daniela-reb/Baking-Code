import { Link,useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import loupe from '../../assets/loupe.png';
import './navbar.css';
import { useState } from "react";

function NavBar ({setSearch}){

    const [input, setInput] = useState("");
    const navigate= useNavigate();


   const handleSubmit = (e) => {
    e.preventDefault();

    if(input.trim() === "") {
        setSearch("")
    } else {
        setSearch(input);
    }
    navigate("/");
   };

    return(
        <nav className="navbar">
 
         <div className="navbar-left">
            <img src={logo} alt="logo"className="logo"></img>
            <h1>Baking code</h1>
         </div>

         <div className="navbar-center">
            <form onSubmit ={handleSubmit}>
             <input 
             type="text" 
             placeholder="cerca ricette...."
             value={input}
             onChange={(e) => setInput(e.target.value)}
             />
             <button type="submit">
                <img style={{width:'20px'}} src={loupe} />
            </button>
  
             </form>
         </div>
         <div className="navbar-right">
            <Link to="/">Home</Link>
            <Link to="/ricette">Ricette</Link>
            <Link to="/contatti">Contatti</Link>
        </div>

        </nav>
    )
}

export default NavBar;