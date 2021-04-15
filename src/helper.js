export const giveDate = function(item) {
  const date = new Date(item.last_login);

  const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const numberDate = date.getDate();
  const monthDate = monthNames[date.getMonth()];
  const yearDate = date.getFullYear();
  let hourDate = date.getHours();
  let minDate = date.getMinutes();

  if (hourDate < 10) {hourDate = `0${hourDate}`};
  if (minDate < 10) {minDate = `0${minDate}`};

  return `${numberDate} ${monthDate} ${yearDate} ${hourDate}:${minDate}`
};