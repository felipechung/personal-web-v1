import React, { Component } from "react";
import Card from "../Card/Card";

export class CardList extends Component {
  state = {
    projects: [
      {
        title: "Party Watch",
        image: "../../images/ptwatch.jpg",
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
        {this.state.map((project) => {
          return <Card name={project.title}></Card>;
        })}
      </div>
    );
  }
}

export default CardList;
