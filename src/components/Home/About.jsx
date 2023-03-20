import React from "react";
import Me from "../../Images/WayneGraduation.jpg"


// Below is the AGE variable math
// .now() returns the number of miliseconds from January 1st, 1970 which is why we have to subtract year from 1970 like in the example that was used
// as otherwise the wrong age will be returned.
var dob = new Date("08/27/1997");
var month_diff = Date.now() - dob.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);

//Below is the Date for centriq graduation
const d = new Date("11/11/2022");
// .toLocaleDateString() gave the date in the desired format above.
let grad = d.toLocaleDateString();


export default function About() {

    return (
<>

    <section id="About-Text" class="col content-center">
            <h1>
                About Me:
            </h1>

            <p>
    I am a {age} year old living in Nebraska who graduated from Centriq Training's Full Stack Web Developer Course on {grad}. 
    
            </p>
    </section>



    <section class='col content-center'>
        <img id="aboutImg" src={Me} alt='Dylan Poole'></img>
    </section>

</>
)
}