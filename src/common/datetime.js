export const currentYear = () => {
  const today = new Date();
  const month = today.getMonth();
  let year = today.getFullYear();
  if (month > 7) {
    year = year + 1;
  }
  return year;
};
