import React, { FC } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Stat } from "../../interfaces";
import { createArrayStats } from "../../utils";

interface Props {
  stats: Stat[];
}
const ChartRadarBar: FC<Props> = ({ stats }) => {
  const arrayStats = createArrayStats(stats);
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  ChartJS.defaults.color = "#fff";
  ChartJS.defaults.borderColor = "#efb810";
  const charOptions = {
    scales: {
      r: {
        ticks: {
          color: "#efb810",
          backdropColor: "transparent",
        },
        beginAtZero: true,
      },
    },
  };
  const data = {
    labels: [
      "HP",
      "Attack",
      "Defense",
      "Speed",
      "Special-Defense",
      "Special-Attack",
    ],
    datasets: [
      {
        label: "Stats Pokemon",
        data: arrayStats,
        backgroundColor: "rgba(239,184,16,0.5)",
        borderColor: "orange",
        pointBackgroundColor: "brown",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data} options={charOptions} />;
};
export { ChartRadarBar };
