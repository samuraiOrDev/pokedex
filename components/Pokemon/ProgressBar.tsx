import React, { FC } from "react";
interface Props {
  valor: number;
  color: string;
  title: string;
  bgColorBar: string;
}

export const ProgressBar: FC<Props> = ({ valor, color, title, bgColorBar }) => {
  let valorPorcentaje = 0;
  valor > 255
    ? (valorPorcentaje = 100)
    : (valorPorcentaje = (valor * 100) / 255);
  if (title == "Attack") title = "ATK";
  if (title == "Defense") title = "DEF";
  if (title == "Special-attack") title = "SP ATK";
  if (title == "Special-defense") title = "SP DEF";
  if (title == "Speed") title = "SPD";

  return (
    <div className="container-bar">
      <div
        style={{
          textAlign: "start",
          fontWeight: "bold",
          marginBottom: "10px",
          width: "30%",
        }}
      >
        {title}: {valor}
      </div>
      <div className="bar" style={{ background: `${bgColorBar}` }}>
        <div
          className="bar-progress"
          style={{ width: `${valorPorcentaje}%`, background: `${color}` }}
        ></div>
      </div>
    </div>
  );
};
