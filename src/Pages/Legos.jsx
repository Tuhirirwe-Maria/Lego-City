import React from 'react'
import Section from "../Components/Section"
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import "../Components/Footer.css"

const Legos = () => {
    return (
        <div>
         <Section/>
         <div className="footer">
         <FaTwitter className="Twiter"/>
         <FaFacebook className="Facebook"/>
         <FaInstagram className="Instagram"/>
         <FaYoutube className="Youtube"/>
         <FaLinkedinIn className="LinkedinIn"/>
         </div>
        </div>
    )
}

export default Legos
