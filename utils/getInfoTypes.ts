import axios from "axios";
import { PokemonFilter } from "../interfaces";

export const getInfoTypes = async (pokemon: PokemonFilter) => {
  let arrraTypesInfo = [];
  for (let i = 0; i < pokemon.types.length; i++) {
    const { data } = await axios.get<any>(pokemon.types[i].type.url);
    arrraTypesInfo.push(data.damage_relations.double_damage_from);
  }
  return arrraTypesInfo;
};
