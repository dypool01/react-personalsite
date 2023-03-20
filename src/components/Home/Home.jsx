import React from "react";
import './Home.css';
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import { ContactModal } from "./ContactModal";
import About from "./About";

export default function Home() {

    

    return (
        <>
        
        <section id='About'> 
        <div id='hero' class='row align-items-center mt-4 mb-2 mx-4'>
            <About />
        </div>
        </section>
            

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