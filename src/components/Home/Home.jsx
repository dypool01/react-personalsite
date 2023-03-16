import React, { useState } from "react";
import './Home.css';
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import { ContactModal } from "./ContactModal";



export default function Home() {

    

    return (
        <>
        <div id='hero'>
            <h3>Dylan Poole</h3>
        </div>
            

        <section id='Languages'>
            <h1 class='mb-5'>Programming Languages</h1>       
            <Languages />          
        </section>
        

        <div id='Frameworks' class='mb-4'>
            <h1 class='mb-5'>Frameworks/Design Architectures</h1>
            <Frameworks />
        </div>
        
        <div>
            <ContactModal/>
        </div>
        </>
    )
}