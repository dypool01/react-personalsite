import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dungeon from "../../Images/Project_Logos/dungeon_application.jpg";
import SAT from "../../Images/Project_Logos/Hogwarts.jpg";
import Capstone from "../../Images/Project_Logos/logo-white-background.png";
import ReactProject from "../../Images/Project_Logos/Reactjs.jpg";
import StoreFront from "../../Images/Project_Logos/StoreFront.jpg";

export function ProjectList() {
  const projects = [
    {
      id: 1,
      label: "Centriq Project",
      projName: "Dungeon Application",
      image: Dungeon,
      tech: "C#",
      website: "https://github.com/dypool01/Dungeon-Application",
      description:
        "A functioning dungeon crawler application created using C# in Microsoft Visual Studio. Meant to be a parody of the grandfather of the MMO genre EverQuest.",
    },

    {
      id: 2,
      label: "Centriq Project",
      projName: "StoreFront",
      image: StoreFront,
      tech: "MVC",
      website: "https://github.com/dypool01/StoreFront-MVC-",
      description:
        "A storefront application at first made static using HTML and later converted to MVC. Includes a functioning contact form, as well as product filters. Sells fantasy themed weapons and armor mostly from the Final Fantasy series.",
    },
    {
      id: 3,
      label: "Centriq Project",
      projName: "To-Do React App and API",
      image: ReactProject,
      tech: "React.js",
      website: "https://github.com/dypool01/to-do",
      description:
        "An application made to display the information from my ToDo API. Allows editing and deleting the different ToDo items. Made using Javascript and HTML.",
    },
    {
      id: 4,
      label: "Centriq Project",
      projName: "Mock SAT Application",
      image: SAT,
      tech: "C#, MVC",
      website: "https://github.com/dypool01/Hogwarts",
      description:
        "An application made in a group of two using Agile Scrum methodology, a relational database, as well as MVC (Model, View, Controller) architectural pattern.",
    },
    {
      id: 5,
      label: "Centriq Project",
      projName: "Capstone",
      image: Capstone,
      tech: "C#, MVC, AJAX",
      website: "https://mjpeventmanagement.com/",
      description:
        "An application made in a group of two using Agile Scrum methodology, a relational database, as well as MVC (Model, View, Controller) architectural pattern. Groups were assigned different parts of the project via Trello boards. Worked on locking down controllers, scaffolding views, and implementing AJAX functionality as well as styling on the Events View.",
    },
  ];
  const projectList = projects.map((props) => (
    <Card className="justify-content-center my-4">
      <Card.Img
        id="projectList"
        variant="top"
        className="mt-3"
        key={props.id}
        src={props.image}
        alt={props.projName}
      />
      <Card.Body>
        <Card.Title>{props.projName}</Card.Title>
        <Card.Text>{props.tech}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
          <Card.Link>
            <Button id="projectList" href={props.website} target="_blank">
              <div>
                {props.id === 5 ? 'Website' : 'GitHub'}
              </div>
            </Button>
          </Card.Link>
        {/* <Card.Link>
                    <Button id='projectList' href={project.gitHub} target='_blank'>Github</Button>
                </Card.Link>  */}
      </Card.Body>
    </Card>
  ));
  return (
    <article id="Projects" class="row col-12 my-4 justify-content-center">
      {projectList}
    </article>
  );
}
