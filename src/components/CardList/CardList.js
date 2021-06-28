import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import Modal from "../Modal/Modal";

export default function CardList() {
  const [project, setProject] = useState(null);

  const projects = [
    {
      name: "Party Watch",
      image: "https://i.ibb.co/LhQcSCP/ptwatch.jpg",
      url: "https://felipechung.github.io/party-watch/",
      description:
        "A simple landing page for a personal project. A website to watch videos simultaneously with other people.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      id: 1,
    },
    {
      name: "Restaurant Website",
      image: "https://i.ibb.co/tqkmdSK/restaurant.jpg",
      url: "https://rocky-coast-45390.herokuapp.com/",
      description: "A fictional restaurant website.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      id: 2,
    },
    {
      name: "Release Date",
      image: "https://i.ibb.co/KKh034N/movie-app.jpg",
      url: "https://immense-escarpment-63343.herokuapp.com/",
      description:
        "A website to get information on upcoming movies and tv shows.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      id: 3,
    },
    {
      name: "Motivational Timer",
      image: "https://i.ibb.co/DLtD4QY/motivational2.jpg",
      url: "https://felipechung.github.io/motivational-timer/",
      description: "A Pomodoro timer with motivational audio messages.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      id: 4,
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
