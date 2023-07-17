import { SmallPokemon } from "../interfaces";
function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
export const paginationPokemons = (pokemons: SmallPokemon[]) => {
  const NUMBER_MAX = pokemons.length;
  const COUNT = 12;
  let numberRandomMax = getRandomArbitrary(1, NUMBER_MAX);
  let numberRandomMin = numberRandomMax - COUNT;
  let arrayPokemosPaginations = [];
  if (numberRandomMax < 12) {
    numberRandomMax = 12;
    numberRandomMin = 0;
  }
  for (let i = numberRandomMin; i < numberRandomMax; i++) {
    arrayPokemosPaginations.push(pokemons[i]);
  }
  return arrayPokemosPaginations;
};
