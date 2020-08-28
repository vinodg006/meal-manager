export const getFormattedDate = (date) => date.split("T")[0];

export const presentableItems = (arr) => {
  let calCountByDate = {};
  const retArr = arr
    .map((val) => {
      val.date = getFormattedDate(val.date);
      if (!calCountByDate[val.date]) calCountByDate[val.date] = 0;
      calCountByDate[val.date] += val.calories;
      return val;
    })
    .map((val) => {
      val.calCount = calCountByDate[val.date];
      return val;
    });

  return retArr;
};
