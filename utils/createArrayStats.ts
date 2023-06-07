import { Stat } from "../interfaces";

export const createArrayStats = (stats: Stat[]) => {
  const arrayStats = stats.map((stat) => stat.base_stat);
  arrayStats.pop();
  const spattack = arrayStats[3];
  const speed = arrayStats[arrayStats.length - 1];
  arrayStats[arrayStats.length - 1] = spattack;
  arrayStats[3] = speed;

  return arrayStats;
};
