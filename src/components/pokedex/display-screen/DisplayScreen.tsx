import React from "react";

function DisplayScreen({ selectedPokemon }: { selectedPokemon?: PokemonType }) {
  return (
    <>
      <div style={{ height: "400px", width: "100%", backgroundColor: "red" }}>
        {selectedPokemon && <img src={selectedPokemon?.imageUrl} />}
      </div>
    </>
  );
}
export default DisplayScreen;