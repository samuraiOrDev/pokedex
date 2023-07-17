import { NextPage } from "next";
import React from "react";
import { ChartRadarBar, Layout, ProgressBar } from "../../components";
import { PokemonFilter } from "../../interfaces/pokemon-full";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
import { getInfoTypes, getPokemonInfo } from "../../utils";
import { colorBar, toCapitalize } from "../../helpers";
import { HeaderPokemon } from "../../components";
import { getFilterAbilities } from "../../utils/getFilterAbilities";
import { AbilitiesComponent } from "../../components/Pokemon/AbilitiesComponent";
import Image from "next/image";

interface Props {
  pokemon: PokemonFilter;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const nametoCapitalize = toCapitalize(pokemon.name);
  const abilities = getFilterAbilities(pokemon);

  return (
    <Layout
      title={`Pokemon | ${nametoCapitalize}`}
      description={`Información detallada del pokemon ${pokemon.name}`}
    >
      <div className="container-pokemon">
        {/* Header-pokemon */}
        <HeaderPokemon pokemon={pokemon} />
        {/* Container-stats */}
        <div className="container-pokemon-stats">
          <div className="progress-bar-stats border-color-light-off">
            {pokemon.stats.map((stat, index) => {
              const color = colorBar(stat.base_stat);
              return (
                <ProgressBar
                  valor={stat.base_stat ? stat.base_stat : stat.total}
                  color="#efb810"
                  title={stat.stat ? toCapitalize(stat.stat.name) : "Total"}
                  bgColorBar="#777"
                  key={index}
                />
              );
            })}
          </div>
          <div className="bar-graphic-stats border-color-light-off">
            <ChartRadarBar stats={pokemon.stats} />
          </div>
        </div>
        {/* Container-abilities */}
        <div className="container-abilities border-color-light-off" style={{"width": "100%"}}>
          <h2>Abilities</h2>
          <br />
          {abilities.map((ability: any) => (
            <AbilitiesComponent ability={ability} key={ability.id} />
          ))}
        </div>
        {/* Container-types */}
        <div className="container-pokemon-types-evolutions">
          <div className="container-types border-color-light-off">
            <h2>Types</h2>
            <div className="image-types">
              {pokemon.types.map((element, index) => (
                <Image
                  key={index}
                  src={`/icons/${element.type.name}.svg`}
                  alt={element.type.name}
                  width={50}
                  height={50}
                />
              ))}
            </div>
            <h2>Weakness</h2>
            <div className="image-types">
              {pokemon.dmg_relations.map((element:any, index: number) =>
                element.map((element2:any, index2: number) => (
                  <Image
                    key={index2}
                    src={`/icons/${element2.name}.svg`}
                    alt={element2.name}
                    width={50}
                    height={50}
                  />
                ))
              )}
            </div>
          </div>
          {/* <div className="container-evolutions border-color-light-off">
            Hola buenas noches
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsArray = [...Array(3)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemonsArray.map((id) => ({
      params: { id },
    })),
    //fallback: false
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);
  let arrraTypesInfo = await getInfoTypes(pokemon as PokemonFilter);
  const objectPkm = { ...pokemon, dmg_relations: arrraTypesInfo };
  // console.log({ objectPkm });
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      pokemon: objectPkm,
    },
    revalidate: 86400,
  };
};

export default PokemonPage;
