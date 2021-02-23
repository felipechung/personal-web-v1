import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.css";

class CardList extends Component {
  state = {
    projects: [
      {
        name: "Party Watch",
        image: "https://i.ibb.co/LhQcSCP/ptwatch.jpg",
        id: 1,
      },
      {
        name: "Restaurant Website",
        image: "https://i.ibb.co/tqkmdSK/restaurant.jpg",

        id: 2,
      },
      {
        name: "Release Date",
        image: "",
        id: 3,
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
