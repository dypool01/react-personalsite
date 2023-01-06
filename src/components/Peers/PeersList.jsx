// import '../../Images/Centriq_Classmates'
import React from "react"
import Peers from "./Peers"

export default function PeerList() {
const peers = [
{
        id: 1,
        name: 'Brittany Dodd',
        image: 'src/Images/Centriq_Classmates/BDodd.jpg',
        personalSite: 'http://brittanydodd.net/',
        linkedIn: 'https://www.linkedin.com/in/brittany-dodd-230467249/',
        gitHub: 'https://github.com/brittdodd'
    },
    
{
        id: 2,
        name: 'Casey Brown',
        image: 'src/Images/Centriq_Classmates/CaseyB.jpg',
        personalSite: 'http://somethingcachey.com/',
        linkedIn: 'https://www.linkedin.com/in/CaseyBrownWD',
        gitHub: 'https://github.com/CaseyBrownWD'
    },
    
{
        id: 3,
        name: 'Dawson Meier',
        image: 'src/Images/Centriq_Classmates/Dawson.png',
        personalSite: 'https://www.linkedin.com/in/dawson-meier-b9781a238/',
        linkedIn: 'https://www.linkedin.com/in/dawson-meier-b9781a238/',
        gitHub: 'https://github.com/dmeier12'
    },

    {
        id: 4,
        name: 'Devin Kuhlman',
        image: 'src/Images/Centriq_Classmates/Devin Kuhlman - Professional Photo.jpg',
        personalSite: 'http://www.devinkuhlman.com/',
        linkedIn: 'https://www.linkedin.com/in/devin-kuhlman-9abb87222/',
        gitHub: 'https://github.com/DevinKuhlman'
    },

    {
        id: 5,
        name: 'Jacquelyn Little',
        image: 'src/Images/Centriq_Classmates/Jacquelyn.jpg',
        personalSite: 'http://www.jacquelynlittle.com/',
        linkedIn: 'https://www.linkedin.com/in/jacquelyn-little-937497249',
        gitHub: 'http://github.com/Jacquelyn525'
    },

    {
        id: 6,
        name: 'Johnathan Walls',
        image: 'src/Images/Centriq_Classmates/JohnW.jpg',
        personalSite: 'http://www.jpwalls.com/',
        linkedIn: 'https://www.linkedin.com/in/john-walls-0151b31b3/',
        gitHub: 'https://github.com/jpwalls08'
    },

    {
        id: 7,
        name: 'Juno Lewis',
        image: 'src/Images/Centriq_Classmates/Juno.jpg',
        personalSite: 'http://www.jlewisinquiry.com/',
        linkedIn: 'https://www.linkedin.com/in/juno-lewis-825714247/',
        gitHub: 'https://github.com/Juno0311'
    },

    {
        id: 8,
        name: 'Kurtis Caldwell',
        image: 'src/Images/Centriq_Classmates/KurtisC.jpeg',
        personalSite: 'http://www.kurtiscaldwell.com/',
        linkedIn: 'https://www.linkedin.com/in/kurtis-caldwell-b212bb24b/',
        gitHub: 'https://github.com/KCald86'
    },

    {
        id: 9,
        name: 'Matthew Jennings',
        image: 'src/Images/Centriq_Classmates/Matt.jpg',
        personalSite: 'http://www.matthewjennings.net',
        linkedIn: 'https://www.linkedin.com/in/matt-jennings-9bb1061b2',
        gitHub: 'https://github.com/mejennings104'
    },

    {
        id: 10,
        name: 'Paige Scott',
        image: 'src/Images/Centriq_Classmates/PaigeS.jpg',
        personalSite: 'http://www.readypaigeone.com/',
        linkedIn: 'https://www.linkedin.com/in/think-paige-scott',
        gitHub: 'https://github.com/paigepaige3'
    },

    {
        id: 11,
        name: 'Sean Coyan',
        image: 'src/Images/Centriq_Classmates/seancoyan1_websize.jpg',
        personalSite: 'http://www.seancoyan.com/',
        linkedIn: 'https://www.linkedin.com/in/seancoyan/',
        gitHub: 'https://github.com/SeanCodes2'
    },

    {
        id: 12,
        name: 'Storm Agnew',
        image: 'src/Images/Centriq_Classmates/StormA.jpg',
        personalSite: 'http://www.stormycoding.com/',
        linkedIn: 'https://www.linkedin.com/in/storm-agnew-88396224b/',
        gitHub: 'https://github.com/StormAgnew'
    },

    {
        id: 13,
        name: 'Tanner Lampson',
        image: 'src/Images/Centriq_Classmates/TannerL.JPG',
        personalSite: 'http://www.tannermatthew.dev/',
        linkedIn: 'https://www.linkedin.com/in/tanner-matthew-dev',
        gitHub: 'https://github.com/CyberTML'
    },

    {
        id: 14,
        name: 'Zach Barkoviak',
        image: 'src/Images/Centriq_Classmates/ZB.jpg',
        personalSite: 'http://www.zachbarkoviak.com',
        linkedIn: 'https://www.linkedin.com/in/zachary-barkoviak-21b2b8249/',
        gitHub: 'https://github.com/ZachBarkoviak'
    }
]
 const peersList = peers.map(peer => (<h2>{peer.name}</h2>))
 return <div>{peersList}</div>


}
