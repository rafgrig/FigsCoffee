import React,{ useState } from "react"
import {Link} from "react-router-dom";
import "./Navbar.css"
import cup from "../Assets/cup.png"
import dessert from "../Assets/dessert.png"

export const Navbar = (props) =>{
    const[coffeetype, setCoffeeType] = useState({
        coffee1: false,
        coffee2: false,
        coffee3: false
    })

    const [menu , setMenu] = useState("shop")

    const handleCheckbox = (checkboxName) => {
        setCoffeeType((prevCheckboxes) => ({
          ...prevCheckboxes,
          [checkboxName]: !prevCheckboxes[checkboxName],
        }));
      };
    return(
        <div className="navbar">
            
            <ul className="nav-menu">
                <p>Categories</p>
                <div className={`category-item ${menu==="coffee" ? "active" : ""}`}>
                    <img className="type" src={cup} alt=""/>
                    <li onClick={() => {setMenu("coffee")}}>
                        <Link style={{textDecoration: "none", color:"black"}} to="/coffee">Coffee</Link>
                    </li>
                </div>
                <div className={`category-item ${menu==="desserts" ? "active" : ""}`}>
                    <img className="type" src={dessert} alt="" />
                    <li onClick={() => {setMenu("desserts")}}>
                        <Link style={{textDecoration: "none" , color:"black" }} to="/desserts">Desserts</Link>
                    </li>
                </div>

        <div className="inp" >
            <div>
                <label htmlFor="volume">Price</label>
                <input type="range" id="volume" name="volume" min="5000AMD" max="10000AMD"/>
            </div>

                <p>Bean Type</p>

            <div>
                <div className="checkb">
                    <label htmlFor={coffeetype.coffee1} >
                        <input
                            type="checkbox" 
                            id="coffeetype"
                            checked={coffeetype.coffee1}
                            onChange={(e) => handleCheckbox('coffee1')}
                        />    
                        Arobica
                    </label>
                </div>
                <div className="checkb">
                    <label htmlFor={coffeetype.coffee2} >
                        <input
                            type="checkbox"
                            id="coffeetype"
                            checked={coffeetype.coffee2}
                            onChange={(e) => handleCheckbox('coffee2')}  />
                        Robusa
                    </label>
                </div>
                <div className="checkb">
                    <label htmlFor={coffeetype.coffee3} >
                        <input
                            type="checkbox"
                            id="coffeetype"
                            checked={coffeetype.coffee3}
                            onChange={(e) => handleCheckbox('coffee3')}  />
                        
                        Liberica
                    </label>
                </div>
            </div>
            </div>
            </ul>
        </div>
    )

}