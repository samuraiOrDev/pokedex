import React, { FC } from "react";
import { toCapitalize } from "../../helpers";

export interface typesAbilities {
  id: number;
  is_hidden: boolean;
  effect_entries: {
    effect: string;
    short_effect: string;
  }[];
  name: string;
  flavor_text_entries: string;
}
interface Props {
  ability: typesAbilities;
}
export const AbilitiesComponent: FC<Props> = ({ ability }) => {
  return (
    <>
      <div className="container-ability">
        <p>
          Name:{" "}
          <span style={{ color: "#efb810" }}>{toCapitalize(ability.name)}</span>
        </p>
        <p>
          Description:{" "}
          <span className="color-light-off">
            {ability.effect_entries[0].effect}
          </span>
        </p>
        <p>
          Effect:{" "}
          <span className="color-light-off">
            {ability.effect_entries[0].short_effect
              ? ability.effect_entries[0].short_effect
              : "--"}
          </span>
        </p>
        <p>
          Definition:{" "}
          <span className="color-light-off">
            {ability.flavor_text_entries ? ability.flavor_text_entries : "--"}
          </span>
        </p>
        <p style={{ borderBottom: "none" }}>
          is_hidden:{" "}
          <span className="color-light-off">
            {ability.is_hidden ? "True" : "False"}
          </span>
        </p>
      </div>
    </>
  );
};
