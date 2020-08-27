export const getFormattedDate = (date) => date.split("T")[0];

export const presentableItems = (arr) => {
  return arr.map((val) => {
    val.date = getFormattedDate(val.date);
    return val;
  });
};
