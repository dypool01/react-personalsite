import React from "react";
import Card from 'react-bootstrap/Card'
import Dungeon from '../../Images/Project_Logos/dungeon_application.jpg'
import SAT from '../../Images/Project_Logos/Hogwarts.jpg'
import Capstone from '../../Images/Project_Logos/logo-white-background.png'
import ReactProject from '../../Images/Project_Logos/Reactjs.jpg'
import StoreFront from '../../Images/Project_Logos/StoreFront.jpg'


export function ProjectList() {
    const projects = [
        {
            id: 1,
            label: 'Centriq Project',
            projName: 'Dungeon Application',
            image: Dungeon,
            tech: '',
            description: ''
        },
        
        {
            id: 2,
            label: 'Centriq Project',
            projName: 'StoreFront',
            image: StoreFront,
            tech: '',
            description: ''
        },
        {
            id: 3,
            label: 'Centriq Project',
            projName: 'To-Do React App and API',
            image: ReactProject,
            tech: '',
            description: ''
        },
        {
            id: 4,
            label: 'Centriq Project',
            projName: 'Mock SAT Application',
            image: SAT,
            tech: '',
            description: ''
        },
        {
            id: 5,
            label:'Centriq Project',
            projName: 'Capstone',
            image: Capstone,
            tech: '',
            description: ''
        }
    ]
    const projectList = projects.map(project => (
      
        <Card style={{ width: '18rem'}}>
            <Card.Img variant='top' key={project.id} src={project.image} alt={project.projName} />
            <Card.Body>
                <Card.Title>{project.projName}</Card.Title>
            </Card.Body>
        </Card>
        
    ))
    return <article class='row justify-content-center'>{projectList}</article>
}