import React from "react";

function NavBar({ count, setCount, pokemonList }) {
  return (
    <div>
      {pokemonList.map((el, index) => (
        <button key={index} onClick={() => setCount((count = index))}>
          {el.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
