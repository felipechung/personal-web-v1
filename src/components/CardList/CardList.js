import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.css";

class CardList extends Component {
  state = {
    projects: [
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
        image: "https://i.ibb.co/h9RvQtS/motivational.jpg",
        url: "https://felipechung.github.io/motivational-timer/",
        id: 4,
      },
    ],
  };
  render() {
    return (
      <div className="card-list-container">
        {this.state.projects.map((project) => {
          return (
            <Card
              name={project.name}
              image={project.image}
              key={project.id}
            ></Card>
          );
        })}
      </div>
    );
  }
}

export default CardList;
