import "./Card.css";

function Card(props) {
  return (
    <div className="card-container" onClick={props.onClickProject}>
      <div className="image-container">
        <img src={props.image} alt="img"></img>
      </div>
    </div>
  );
}

export default Card;
