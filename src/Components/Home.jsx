import React from 'react'
import "./Home.css"
import Menu from './Menu';


const Home = () => {
    return (
        <div className="header">
            <Menu/>
            <img src="https://res.cloudinary.com/awesomeone-maria/image/upload/v1632578384/Lego/lego_group_fdct3o.jpg" className="bg-image" alt="" />
           <div className="container">
          
            
            
            <div className="bg-text">
            <h1>LEGO CITY</h1>
            </div>
           </div>
        </div>
    )
}

export default Home
