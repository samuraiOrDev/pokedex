import { pokeApi } from "../api";
import { PokemonFilter } from "../interfaces";
export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFilter>(`/pokemon/${nameOrId}`);
    return data;
  } catch (error) {
    return null;
  }
};
