import React from 'react'
import EF6 from '../../Images/Logos/EF6Logo.png'
import MVC from '../../Images/Logos/MVCLogo.jpg'
import Reactjs from '../../Images/Logos/ReactLogo.png'

export default function Frameworks() {
  const frameworks = [
    {
        id: 1,
        framework: 'Entity Framework 6',
        image: EF6,
        description: 'Entity Framework 6 (EF6) is a tried and tested object-relational mapper (O/RM) for . NET with many years of feature development and stabilization.'
    },
    {
        id: 2,
        framework: 'Model View Controller',
        image: MVC,
        description: 'A software architectural pattern commonly used for developing user interfaces that divide the related program logic into three interconnected elements.'
    },
    {
        id: 3,
        framework: 'React.js',
        image: Reactjs,
        description: 'A free and open-source front-end JavaScript library for building user interfaces based on UI components.'
    }
  ]
  const frameworkList = frameworks.map(x => (
    <div class='col-md-5 mb-4'>
        <img id='frameworkImg' key={x.id} src={x.image} alt={x.framework}></img>
        <h2>{x.framework}</h2>
        <p>{x.description}</p>
    </div>
  ))
  return <article class='row justify-content-center'>{frameworkList}</article>
}
