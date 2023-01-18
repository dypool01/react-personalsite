import React from 'react'
import Csharp from '../../Images/Logos/C#Logo.png'
import CSS3 from '../../Images/Logos/CSS3_logo.svg.png'
import HTML5 from '../../Images/Logos/HTML5.png'
import JS from '../../Images/Logos/JSLogo.png'
import SQL from '../../Images/Logos/SQL_Logo.png'




export default function Languages() {
    const languages = [

    {
        id: 1,
        language: 'Hypertext Markup Language 5',
        description: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.',
        image: HTML5
    },
    {
        id: 2,
        language: 'Cascading Style Sheets 3',
        description: 'CSS is a computer language for laying out and structuring web pages (HTML or XML).',
        image: CSS3 
    },
    {
        id: 3,
        language: 'JavaScript',
        description: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.',
        image: JS 
    },
    {
        id: 4,
        language: 'SQL',
        description: 'SQL stands for Structured Query Language. SQL lets you access and manipulate databases.',
        image: SQL 
    },
    {
        id: 5,
        language: 'C#',
        description: 'C# is often used to develop professional, dynamic websites on the . NET platform, or open-source software.',
        image: Csharp 
    }

    ]
    const languagesList = languages.map(x => (
        
        
            <div class='col-md-5 mb-4'>
                <img key={x.id} src={x.image} alt={x.language}></img>
                    <h2>{x.language}</h2>
                    <p>{x.description}</p>
            </div>
        
    
    ))
return <article class='row justify-content-center'>{languagesList}</article>
}