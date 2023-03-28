function PokemonCard({ Pokemon }) {
  return (
    <div>
      <figure>
        {Pokemon.imgSrc ? (
          <img src={Pokemon.imgSrc} alt={Pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{Pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
