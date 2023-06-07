export const colorBar = (base_stat: number) => {
  if (base_stat <= 50) return "red";
  if (base_stat < 80 && base_stat >= 50) return "orange";
  if (base_stat < 100 && base_stat >= 80) return "yellow";
  return "green";
};
