import styles from "./Card.module.css";

const Card = ({ props }) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <a href="">{props.category}</a>
    </div>
  );
};

export default Card;
