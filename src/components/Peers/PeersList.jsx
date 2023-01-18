import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Brittany from '../../Images/Centriq_Classmates/BDodd.jpg'
import Casey from '../../Images/Centriq_Classmates/CaseyB.jpg'
import Dawson from '../../Images/Centriq_Classmates/Dawson.png'
import Devin from '../../Images/Centriq_Classmates/Devin_Kuhlman_Professional_Photo.jpg'
import Jacquelyn from '../../Images/Centriq_Classmates/Jacquelyn.jpg'
import John from '../../Images/Centriq_Classmates/JohnW.jpg'
import Juno from '../../Images/Centriq_Classmates/Juno.jpg'
import Kurtis from '../../Images/Centriq_Classmates/KurtisC.jpeg'
import Matt from '../../Images/Centriq_Classmates/Matt.jpg'
import Paige from '../../Images/Centriq_Classmates/PaigeS.jpg'
import Sean from '../../Images/Centriq_Classmates/seancoyan1_websize.jpg'
import Storm from '../../Images/Centriq_Classmates/StormA.jpg'
import Tanner from '../../Images/Centriq_Classmates/TannerL.JPG'
import Zach from '../../Images/Centriq_Classmates/ZB.jpg'

export default function PeerList() {
const peers = [
{
        id: 1,
        name: 'Brittany Dodd',
        image: Brittany,
        personalSite: 'http://brittanydodd.net/',
        linkedIn: 'https://www.linkedin.com/in/brittany-dodd-230467249/',
        gitHub: 'https://github.com/brittdodd'
    },
    
{
        id: 2,
        name: 'Casey Brown',
        image: Casey,
        personalSite: 'http://somethingcachey.com/',
        linkedIn: 'https://www.linkedin.com/in/CaseyBrownWD',
        gitHub: 'https://github.com/CaseyBrownWD'
    },
    
{
        id: 3,
        name: 'Dawson Meier',
        image: Dawson,
        personalSite: 'https://www.linkedin.com/in/dawson-meier-b9781a238/',
        linkedIn: 'https://www.linkedin.com/in/dawson-meier-b9781a238/',
        gitHub: 'https://github.com/dmeier12'
    },

    {
        id: 4,
        name: 'Devin Kuhlman',
        image: Devin,
        personalSite: 'http://www.devinkuhlman.com/',
        linkedIn: 'https://www.linkedin.com/in/devin-kuhlman-9abb87222/',
        gitHub: 'https://github.com/DevinKuhlman'
    },

    {
        id: 5,
        name: 'Jacquelyn Little',
        image: Jacquelyn,
        personalSite: 'http://www.jacquelynlittle.com/',
        linkedIn: 'https://www.linkedin.com/in/jacquelyn-little-937497249',
        gitHub: 'http://github.com/Jacquelyn525'
    },

    {
        id: 6,
        name: 'Johnathan Walls',
        image: John,
        personalSite: 'http://www.jpwalls.com/',
        linkedIn: 'https://www.linkedin.com/in/john-walls-0151b31b3/',
        gitHub: 'https://github.com/jpwalls08'
    },

    {
        id: 7,
        name: 'Juno Lewis',
        image: Juno,
        personalSite: 'http://www.jlewisinquiry.com/',
        linkedIn: 'https://www.linkedin.com/in/juno-lewis-825714247/',
        gitHub: 'https://github.com/Juno0311'
    },

    {
        id: 8,
        name: 'Kurtis Caldwell',
        image: Kurtis,
        personalSite: 'http://www.kurtiscaldwell.com/',
        linkedIn: 'https://www.linkedin.com/in/kurtis-caldwell-b212bb24b/',
        gitHub: 'https://github.com/KCald86'
    },

    {
        id: 9,
        name: 'Matthew Jennings',
        image: Matt,
        personalSite: 'http://www.matthewjennings.net',
        linkedIn: 'https://www.linkedin.com/in/matt-jennings-9bb1061b2',
        gitHub: 'https://github.com/mejennings104'
    },

    {
        id: 10,
        name: 'Paige Scott',
        image: Paige,
        personalSite: 'http://www.readypaigeone.com/',
        linkedIn: 'https://www.linkedin.com/in/think-paige-scott',
        gitHub: 'https://github.com/paigepaige3'
    },

    {
        id: 11,
        name: 'Sean Coyan',
        image: Sean,
        personalSite: 'http://www.seancoyan.com/',
        linkedIn: 'https://www.linkedin.com/in/seancoyan/',
        gitHub: 'https://github.com/SeanCodes2'
    },

    {
        id: 12,
        name: 'Storm Agnew',
        image: Storm,
        personalSite: 'http://www.stormycoding.com/',
        linkedIn: 'https://www.linkedin.com/in/storm-agnew-88396224b/',
        gitHub: 'https://github.com/StormAgnew'
    },

    {
        id: 13,
        name: 'Tanner Lampson',
        image: Tanner,
        personalSite: 'http://www.tannermatthew.dev/',
        linkedIn: 'https://www.linkedin.com/in/tanner-matthew-dev',
        gitHub: 'https://github.com/CyberTML'
    },

    {
        id: 14,
        name: 'Zach Barkoviak',
        image: Zach,
        personalSite: 'http://www.zachbarkoviak.com',
        linkedIn: 'https://www.linkedin.com/in/zachary-barkoviak-21b2b8249/',
        gitHub: 'https://github.com/ZachBarkoviak'
    }
]
 const peersList = peers.map(peer => (
/* <>
<div id="Peer-card">
 <h2>{peer.name}</h2>
 <img key={peer.id} src={peer.image} alt={peer.name}></img>
<a href={peer.personalSite}>
    <p>Personal Site</p>
</a>
<a href={peer.linkedIn}>
    <p>LinkedIn</p>
</a>
<a href={peer.gitHub}>
    <p>GitHub</p>
</a>
 </div>
 </> */


        

 <Card className='justify-content-center my-4' style={{ width: '25rem'}}>
    <Card.Img variant="top" className="mt-3 " key={peer.id} src={peer.image} alt={peer.name} />
    <Card.Body>
        <Card.Title className='mb-3'>{peer.name}</Card.Title>
        <Card.Link>
        <Button variant='secondary' href={peer.personalSite}  target='_blank'>Personal Site</Button>
        </Card.Link>
        <Card.Link>
        <Button variant='secondary' href={peer.linkedIn}  target='_blank'>LinkedIn</Button>
        </Card.Link>
        <Card.Link>
        <Button variant='secondary' href={peer.gitHub}  target='_blank'>GitHub</Button>
        </Card.Link>
    </Card.Body>
 </Card>

 



 ))
 return <article id='peerList' class='row justify-content-center my-4'>{peersList}</article>
}
