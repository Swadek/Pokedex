import PropTypes from "prop-types";
import styles from "./PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className={styles.cardImg}
        />
      ) : (
        <img src="./src/assets/NotFound.png" className={styles.cardImg} />
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
