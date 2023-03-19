export const formatNum = (num: number) => {
  const roundedNum = Math.round(num);
  return roundedNum.toLocaleString("fr-FR");
};
