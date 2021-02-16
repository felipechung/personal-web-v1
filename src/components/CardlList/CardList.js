import React, { Component } from "react";

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
    return <div></div>;
  }
}

export default CardList;
