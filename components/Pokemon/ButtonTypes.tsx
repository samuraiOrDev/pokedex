import React, { FC } from "react";

interface Props {
  color: string;
  type: string;
}
export const ButtonTypes: FC<Props> = ({ color, type }) => {
  return <button style={{ backgroundColor: `${color}` }}>{type}</button>;
};
