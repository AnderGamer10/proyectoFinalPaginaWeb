//React
import { Link } from "react-router-dom";
import "../styles/Card.sass";
const Card = ({ data }) => {
  const imgStyles = {
    height: "260px",
    objectFit: "cover",
  };
  console.log(data);

  return (
    <div className="card carta">
      <img
        src={"http://ramenparados.com/wp-content/uploads/2018/09/fairy-tail-final-anime-719x1024.jpg"}
        alt={data.name}
        className="card-img-top"
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{data.name}</h4>
        <Link to={`/anime/${data.name}`}>
          <button className="btn btn-secondary">{data.name}</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
