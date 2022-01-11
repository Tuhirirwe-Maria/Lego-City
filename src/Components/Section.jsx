import React from 'react'
import Menu from './Menu';
import Card from "./Cards"
import {police, civil, civil_female, civil_other} from "./card"
import "./Section.css"

const Section = () => {
   const Police = police.map((item, key)=>(
       <Card
       key={item.id}
       image={item.image}
       image2={item.image2}
       title={item.title}
       text={item.text}
       />
   ));
   const Civil = civil.map((item, key)=>(
    <Card
    key={item.id}
    image={item.image}
    image2={item.image2}
    title={item.title}
    text={item.text}
    />
   ));
const CivilFemale = civil_female.map((item, key)=>(
    <Card
    key={item.id}
    image={item.image}
    image2={item.image2}
    title={item.title}
    text={item.text}
    />
));
const CivilOther = civil_other.map((item, key)=>(
    <Card
    key={item.id}
    image={item.image}
    image2={item.image2}
    title={item.title}
    text={item.text}
    />
));
    return (
        <div>
            <Menu/>
            <div className="characters">
                <div className="lego-section">
                    <div className="cards">
                      {Police}
                    </div>
                    <div className="cards">
                      {Civil}
                      </div>
                      <div className="cards">
                      {CivilFemale}
                      </div>
                      <div className="cards">
                      {CivilOther}
                      </div>
                </div>
           </div>
            
        </div>
    )
}

export default Section
