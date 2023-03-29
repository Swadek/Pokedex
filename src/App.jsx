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
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    <div/>
  );
}

export default App;
