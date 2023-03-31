import React from "react";

function NavBar({ count, setCount, pokemonList }) {
  const handleClickNext = () => {
    setCount(count + 1);
  };
  const handleClickPrevious = () => {
    setCount(count - 1);
  };
  /* J'ai créé une boucle plutôt que de faire disparaitre les boutons*/
  count === -1
    ? setCount(pokemonList.length - 1)
    : count === pokemonList.length
    ? setCount(0)
    : count;
  return (
    <div>
      <button onClick={handleClickPrevious}>Previous</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default NavBar;
