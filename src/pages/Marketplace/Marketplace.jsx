
import React from "react";
import "./Marketplace.css";
import  {CardItem} from "../../MockData/index.js";
import {Card} from "../../components/Card/index.jsx";
import { Navbar } from "../../components/Navbar/Navbar.jsx";


export const Marketplace = () =>{
    return(

        
        <div className="wrapper">
            <div className="marketplace">
                <Navbar />
                <div className="cards">
                    {
                        CardItem.map((item, index) => {
                            return (
                                <>
                                    <Card key={index} title={item.title} image={item.imageSrc} price={item.price} buttonName={item.button} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Marketplace