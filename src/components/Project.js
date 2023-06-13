import React from "react";
import construction from "./images/construction.jpg";
import food from "./images/food.webp";
import jail from "./images/Prison-Cell.jpeg";
import text from "./images/text.webp";
import gen from "./images/generator.jpg";
import "./Project.css";

export default function Project() {
    const projects = [
        {
            name: "Construction Company",
            gh: "https://github.com/d-lil/rob-the-builder.git",
            desc: "An app for requesting construction projects, as well as admin access to view and update projects with a Calendly API inclusion",
            bg: construction,
            link: "https://rob-the-builder.herokuapp.com/"
        }, 
        {
            name: "Recipe Finder",
            gh: "https://github.com/agnellod/nutrition-recipies-",
            desc: "A recipe finder app",
            bg: food,
            link: "https://agnellod.github.io/nutrition-recipies-/"
        },
        {
            name: "Babes Behind Bars",
            gh: "https://github.com/d-lil/mugshawtys",
            desc: "A dating app for prisoners and people that want to date prisoners.",
            bg: jail,
            link: "https://mugshawtys.herokuapp.com/"
        },
        {
            name: "Note Taker",
            gh: "https://github.com/MattrMoore/Notetaker",
            desc: "An application that can write and save notes on the backend and then retrieve them to the front end using express.js",
            bg: text,
            link: "https://github.com/MattrMoore/Notetaker/"
        },
        {
            name: "README Generator",
            gh: "https://github.com/MattrMoore/readmegen",
            desc: "An app that generates a README file through the command line",
            bg: gen,
            link: ""
        }
    ];
    const projectList = projects.map((project, index) => {
        return (
        <div className="project" key={project.desc} 
        style={{backgroundImage: `url(${project.bg})`}}>
                <div className="project-writing">
                    <h3>{project.name}</h3>
                    <p>______________</p>
                    <p>{project.desc}</p>
                </div>
                <div className="links">
                    <a href={project.link}>
                        Deployed
                    </a>
                    <a href={project.gh}>
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="100" 
     height="100" />
                    </a>
                </div>
        </div>
    )});

    return (
        <div className="project-container">
            {projectList}
        </div>
    );
}