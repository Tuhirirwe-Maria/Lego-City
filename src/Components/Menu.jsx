import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const [click, setClick] = useState(false);

    const handleClick =()=>setClick(!click);
    return (
        <div>
            <div className ='menu-icon' onClick ={handleClick} >
                <i className ={click ? 'fas fa-times' : 'fas fa-hamburger'}/>
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <h2><i>LEGO CITY</i></h2>
           <li className ='nav-item'>
                <Link to ='/' className ='nav-links' onClick={handleClick}>
                      Home
                </Link>
            </li>
            <li className ='nav-item'>
                <Link to ='/legos' className ='nav-links' onClick={handleClick}>
                      Lego City
                </Link>
            </li>
            <li className ='nav-item'>
                <Link to ='/' className ='nav-links' onClick={handleClick}>
                      Contact Us
                </Link>
            </li>
           </ul>
          
        </div>
    )
}

export default Menu
