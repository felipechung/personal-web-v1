import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <p className="project-title">{props.name}</p>

      <div className="image-container">
        <img src={props.image} alt="imag"></img>
      </div>
    </div>
  );
}

export default Card;
