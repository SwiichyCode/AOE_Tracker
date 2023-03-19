// export const formatNum = (num: number) => {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

export const formatNum = (num: number) => {
  const roundedNum = Math.round(num);
  return roundedNum.toLocaleString("fr-FR");
};
