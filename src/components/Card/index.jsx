import React from "react";

import "./card.css"

export const Card = (props) => {
    const {buttonName, price, image, title} = props
    console.log(image);
    return (
        <>
            <div className="item">
                {/* <div className="img"> */}
                    <img src={`${image}`} alt="" />
                {/* <Link to={"/love"}><img className="love" src={love} alt="" /></Link>  */}
                {/* </div> */}
                <div className="name-price">
                    <p>{title}</p>
                    <p style={{color:"rgb(100, 119, 113)"}}>{price}</p>
                    <button className="card-btn">{buttonName}</button>
                </div>
            </div>
        </>
    )
}