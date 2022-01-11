import React from 'react'

const Card = ({image, image2, title, text}) => {
    return (
        <div className ="card">
            <div className="container">
            <img className="image1" src={image} alt="lego" />
           <div className="overlay">
               <img className="image2" src={image2} alt="lego" />
           </div>
           </div>
           <div className="infor">
               <h2>{title}</h2>
               <p>{text}</p>
           </div>
        </div>
    )
}

export default Card
