import { abilities } from "../data/abilities-pokemon";
import { PokemonFilter } from "../interfaces";

export const getFilterAbilities = (pokemon: PokemonFilter) => {
  const newArray = abilities.map((ability) => {
    for (let i = 0; i < pokemon.abilities.length; i++) {
      if (ability.name == pokemon.abilities[i].ability.name) {
        const is_hidden = pokemon.abilities[i].is_hidden;
        return { ...ability, is_hidden };
      }
    }
  });
  const abilitiesArray = newArray.filter((element) => element);
  return abilitiesArray;
};
