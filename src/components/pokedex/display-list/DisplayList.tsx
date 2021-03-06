import React from "react";
import Box from "../../../patterns/Box";
import {
  PokedexContextType,
  PokedexStateContext,
} from "../../../state/PokedexStateContext";
import DisplayListItem from "./DisplayListItem";

function DisplayList({
  pokemonList = [],
  onSelectPokemon,
  selectedPokemon,
}: {
  pokemonList: PokemonType[];
  onSelectPokemon: (selectedPokemon: PokemonType) => void;
  selectedPokemon?: PokemonType;
}) {
  const { state } = React.useContext<PokedexContextType>(PokedexStateContext);
  const handleClick = React.useCallback(
    (name: string) => {
      const pokemon = pokemonList.find((p) => p.name === name);
      if (pokemon) {
        onSelectPokemon(pokemon);
      }
    },
    [onSelectPokemon, pokemonList]
  );

  const filteredPokemonList = React.useMemo(() => {
    return pokemonList.filter((p) => p.name.includes(state.searchValue ?? ""));
  }, [pokemonList, state.searchValue, state.filterType1, state.filterType2]);
  return (
    <Box maxHeight="500px" overflowY="scroll">
      <Box as="ul" p="0" m="0" className="list-group">
        {filteredPokemonList.map((pokemon) => (
          <DisplayListItem
            key={pokemon.name}
            name={pokemon.name}
            selected={selectedPokemon?.name === pokemon.name}
            onClick={handleClick}
          />
        ))}
      </Box>
    </Box>
  );
}

export default React.memo(DisplayList);
