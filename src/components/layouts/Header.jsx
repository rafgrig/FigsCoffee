import React from "react"
import logo from "../Assets/logo.png"
import cart from "../Assets/cart.png"
import love from "../Assets/love.png"
import { Link } from "react-router-dom"
import "./header.css"

export const Header = (props) => {
    return (
        <>
            <div className="header">
                <div className="nav-logo">
                    <img className="navimg" src={logo} alt="" />
                </div>
                <div className="nav-login-love-cart">
                    <Link to="/cart"><img  src={cart} alt=""/></Link>
                    <Link to="/love"><img  src={love} alt=""/></Link>
                    <Link to="/login"><button >Login In</button></Link>
                    
                    <div className="nav-cart-count">
                        0
                    </div>
               
                </div>
            </div>
        
        </>
    )
}