import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [count, setCount] = useState(0);
  const handleClickNext = () => {
    setCount(count + 1);
  };
  const handleClickPrevious = () => {
    setCount(count - 1);
  };
  count === -1
    ? setCount(pokemonList.length - 1)
    : count === pokemonList.length
    ? setCount(0)
    : count;
  /* J'ai créé une boucle plutôt que de faire disparaitre les boutons*/

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[count]} />
        <button onClick={handleClickPrevious}>Previous</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </>
  );
}

export default App;
