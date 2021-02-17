import React, { Component } from "react";
import Card from "../Card/Card";

class CardList extends Component {
  state = {
    projects: [
      {
        title: "Party Watch",
        image: "https://www.watchparty.me/screenshot4.png",
        id: 1,
      },
      {
        title: "Restaurant Website",
        image: "",
        id: 2,
      },
      {
        title: "Release Date",
        image: "",
        id: 3,
      },
    ],
  };
  render() {
    return (
      <div className="card-list-container">
        {this.state.projects.map((project) => {
          return <Card name={project.title} image={project.image}></Card>;
        })}
      </div>
    );
  }
}

export default CardList;
