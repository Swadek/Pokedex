import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";

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

  return (
    <>
      <section>
        <PokemonCard pokemon={pokemonList[count]} />
        <NavBar count={count} setCount={setCount} pokemonList={pokemonList} />
      </section>
    </>
  );
}

export default App;
