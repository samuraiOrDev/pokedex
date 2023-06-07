import { SmallPokemon } from "../interfaces";
function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}
export const paginationPokemons = (pokemons: SmallPokemon[]) => {
  const NUMBER_MAX = pokemons.length;
  const COUNT = 10;
  let numberRandomMax = getRandomArbitrary(1, NUMBER_MAX);
  let numberRandomMin = numberRandomMax - COUNT;
  let arrayPokemosPaginations = [];
  if (numberRandomMax < 20) {
    numberRandomMax = 21;
    numberRandomMin = 1;
  }
  for (let i = numberRandomMin; i < numberRandomMax; i++) {
    arrayPokemosPaginations.push(pokemons[i]);
  }
  return arrayPokemosPaginations;
};
