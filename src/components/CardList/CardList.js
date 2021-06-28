import React, { useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import Modal from "../Modal/Modal";

export default function CardList() {
  const [projectId, setProjectId] = useState(null);

  const projects = [
    {
      name: "Party Watch",
      image: "https://i.ibb.co/LhQcSCP/ptwatch.jpg",
      url: "https://felipechung.github.io/party-watch/",
      id: 1,
    },
    {
      name: "Restaurant Website",
      image: "https://i.ibb.co/tqkmdSK/restaurant.jpg",
      url: "https://rocky-coast-45390.herokuapp.com/",
      id: 2,
    },
    {
      name: "Release Date",
      image: "https://i.ibb.co/KKh034N/movie-app.jpg",
      url: "https://immense-escarpment-63343.herokuapp.com/",
      id: 3,
    },
    {
      name: "Motivational Timer",
      image: "https://i.ibb.co/DLtD4QY/motivational2.jpg",
      url: "https://felipechung.github.io/motivational-timer/",
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
              onClickProject={() => setProjectId(project.id)}
            ></Card>
          );
        })}
      </div>
      <Modal
        isOpen={Boolean(projectId)}
        onClickClose={() => setProjectId(null)}
      >
        <h1>Hello Modal</h1>
      </Modal>
    </div>
  );
}
