import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { toCapitalize } from "../../helpers";
import { SmallPokemon, TypeElement, TypeType } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
  types: TypeElement[];
}
export const PokemonCard: FC<Props> = ({ pokemon, types }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-title">
        <p>{toCapitalize(pokemon.name)}</p>
        <p>#{pokemon.id}</p>
      </div>
      <div className="pokemon-card-img-types">
        <>
          <Image
            src={pokemon.img}
            alt={pokemon.name}
            width={100}
            height={100}
          />
          <div className="image-types">
            {types?.map((element, index) => (
              <Image
                key={index}
                src={`/icons/${element.type.name}.svg`}
                alt={element.type.name}
                width={50}
                height={50}
              />
            ))}
          </div>
        </>
      </div>
      <div
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
};
