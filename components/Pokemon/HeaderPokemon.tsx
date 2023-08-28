import Image from "next/image";
import React, { FC } from "react";
import { toCapitalize } from "../../helpers";
import { PokemonFilter } from "../../interfaces";

interface Props {
  pokemon: PokemonFilter;
}
export const HeaderPokemon: FC<Props> = ({ pokemon }) => {
  let imgDreamWorld = "";
  let imgHome = "";
  if (pokemon.sprites.other) {
    imgDreamWorld = pokemon.sprites.other.dream_world.front_default;
    imgHome = pokemon.sprites.other.home.front_default;
  }
  const nametoCapitalize = toCapitalize(pokemon.name);
  const widthHeightForm = 120;
  const heightPkm = pokemon.height / 10 + " m";
  const weightPkm = pokemon.weight / 10 + " Kg";
  return (
    <div className="container-pokemon-header">
      <div className="img-default border-color-light-off">
        <Image
          src={imgDreamWorld ? imgDreamWorld : imgHome}
          width={250}
          height={250}
          alt={pokemon.name}
          priority
        />
      </div>
      <div className="imgs-forms border-color-light-off">
        <div className="container-titles">
          <div className="container-titles-header">
            <h1>
              {nametoCapitalize}{" "}
              <span className="color-light-off">Nº {pokemon.id} </span>
            </h1>
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
          </div>
          <p className="entries color-light-off">{pokemon.entries}</p>
          <div className="container-height-weight">
            <p>
              Height: <span className="color-light-off">{heightPkm}</span>
            </p>
            <p>
              Weight: <span className="color-light-off">{weightPkm}</span>
            </p>
          </div>
        </div>
        <div className="container-imgs-forms">
          <div className="container-imgas-forms-default">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={widthHeightForm}
              height={widthHeightForm}
            />
            <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width={widthHeightForm}
              height={widthHeightForm}
            />
            <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width={widthHeightForm}
              height={widthHeightForm}
            />
            <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width={widthHeightForm}
              height={widthHeightForm}
            />
          </div>
          {pokemon.sprites.front_female && (
            <div className="container-imgas-forms-female">
              <Image
                src={pokemon.sprites.front_female}
                alt={pokemon.name}
                width={widthHeightForm}
                height={widthHeightForm}
              />
              {pokemon.sprites.back_female && (
                <Image
                  src={pokemon.sprites.back_female}
                  alt={pokemon.name}
                  width={widthHeightForm}
                  height={widthHeightForm}
                />
              )}
              {pokemon.sprites.front_shiny_female && (
                <Image
                  src={pokemon.sprites.front_shiny_female}
                  alt={pokemon.name}
                  width={widthHeightForm}
                  height={widthHeightForm}
                />
              )}
              {pokemon.sprites.back_shiny_female && (
                <Image
                  src={pokemon.sprites.back_shiny_female}
                  alt={pokemon.name}
                  width={widthHeightForm}
                  height={widthHeightForm}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
