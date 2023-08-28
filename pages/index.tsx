import { NextPage } from "next";
import { GetStaticProps } from "next";
import { Layout } from "../components";
import { pokeApi } from "../api";
import { SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components";
import { typesPokemons } from "../data/types-pokemon";

const metadaData = {
  title: "Pokedex | Samuraior.dev",
  description: "Pokedex realizada con Next.js",
};
interface Props {
  pokemons: SmallPokemon[];
}
const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title={metadaData.title} description={metadaData.description}>
      <div className="container-pokemon-cards">
        {pokemons.map((pokemon, index) => {
          const pokemonSucess = typesPokemons.filter(
            (element) => element.name == pokemon.name && element.types
          );
          return (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              types={pokemonSucess[0].types}
            />
          );
        })}
      </div>
    </Layout>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<SmallPokemon[]>("pokemon");
  return {
    props: { pokemons: data },
  };
};
