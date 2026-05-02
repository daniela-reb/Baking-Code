import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import { useState } from "react";
import "./contatti.css"


function Contatti () {

     const [form,setForm] =useState({
        name:"",
        email: "",
        message: ""
     });  

     const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
     };

    return(
        <div className="contatti">

       <form className="form" 
              action="https://formspree.io/f/mjgjpdrp"
              method="POST"
              >
        <input
           type="text"
           name="name"
           value={form.name}
           placeholder="Nome"
           onChange={handleChange}
        />
        <br />

        <input
           type="email"
           name="email"
           value={form.email}
           placeholder="Email"
           onChange={handleChange}
        />
        <br />

        <textarea
        name="message"
        value={form.message}
        placeholder="Messagio"
        onChange={handleChange}
    />

    <br />
 
       <button className="submit-button" type="submit">Invia</button>
       </form>

      <div className="social">
       
             <h2>Contattami</h2>

        <p>
          📞<a href="tel:+33508656693">+393508656693</a>
          </p>
          <p>
             📍
            <a href="https://www.google.com/maps/search/?api=1&query=Via+Roma+10+Milano" 
               target="_blank"
               rel="noopener noreferrer"
               >
                  Via Roma 10,Milano
               </a>
          </p>

          <div className="social-icons">
               <a href="https://facebook.com/rus.daniela2?locale=it_IT" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  ><FaFacebook />
               </a>
              
              <a 
                  href="https://instagram.com/danyellarebeca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
              ><FaInstagram />
              </a>

              <a 
                  href="https://wa.me/393508656693?text=Ciao,%20mi%20piaccerebbe%20colaborare%20con%20te"
                  target="_blank"
                  rel="noopener noreferrer"
               ><FaWhatsapp />
             </a>  
          </div>

         </div>

        </div>
    );
}
export default Contatti;