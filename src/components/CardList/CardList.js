import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import Modal from "../Modal/Modal";
import letmeaskImg from "../../images/letmeask.JPG";

export default function CardList() {
  const [project, setProject] = useState(null);

  const projects = [
    {
      name: "Letmeask",
      image: letmeaskImg,
      url: "https://letmeask-1558a.web.app/",
      github: "https://github.com/felipechung/letmeask",
      description:
        "A website for users to answer/ask questions. This project was coded along with the instructor of the Rocketseat Next Level Week #5.",
      technologies: ["React JS", "TypeScript", "Firebase"],
      id: 1,
    },

    {
      name: "Restaurant Website",
      image: "https://i.ibb.co/tqkmdSK/restaurant.jpg",
      url: "https://rocky-coast-45390.herokuapp.com/",
      github: "https://github.com/felipechung/restaurant-web",
      description:
        "A fictional restaurant website, built with Embedded JavaScript templating.",
      technologies: ["EJS", "Node.js", "mongoDB"],
      id: 2,
    },
    {
      name: "Release Date",
      image: "https://i.ibb.co/KKh034N/movie-app.jpg",
      url: "https://immense-escarpment-63343.herokuapp.com/",
      github: "https://github.com/felipechung/movie-web",
      description:
        "A website to get information on upcoming movies and tv shows. Integrated with The Movie Database API.",
      technologies: ["EJS", "Node.js"],
      id: 3,
    },
    {
      name: "Motivational Timer",
      image: "https://i.ibb.co/DLtD4QY/motivational2.jpg",
      url: "https://felipechung.github.io/motivational-timer/",
      github: "https://github.com/felipechung/motivational-timer",
      description: "A Pomodoro timer with motivational audio messages.",
      technologies: ["HTML", "CSS", "JavaScript"],
      id: 4,
    },
    {
      name: "Party Watch",
      image: "https://i.ibb.co/LhQcSCP/ptwatch.jpg",
      url: "https://felipechung.github.io/party-watch/",
      github: "https://github.com/felipechung/party-watch",
      description:
        "A simple landing page for a personal project. A website to watch videos simultaneously with other people.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      id: 5,
    },
  ];

  return (
    <div>
      <div className="card-list-container">
        {projects.map((project) => {
          return (
            <Card
              name={project.name}
              image={project.image}
              key={project.id}
              onClickProject={() => setProject(project)}
            ></Card>
          );
        })}
      </div>
      <Modal
        isOpen={Boolean(project)}
        onClickClose={() => setProject(null)}
        project={project}
      ></Modal>
    </div>
  );
}
