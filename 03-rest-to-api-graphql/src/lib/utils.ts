export const getWikipediaMobileUrl = (url: string) => {
  return url !== undefined ? url.replace('wikipedia', 'm.wikipedia') : '';
};

export const checkYear = (year: string) => {
  //año actual del equipo
  const currentYear = new Date().getFullYear();

  /* si el año no es un numero o no esta entre el rango de años 1950 o mayor que el currentYear,
     se usa el currentYear como parametro para enviar a la query */
  if (isNaN(+year) || +year < 1950 || +year > currentYear) {
    year = String(currentYear);
  }

  return year;
};

export const checkRound = (round: number) => {
  if (round >= 100) {
    return 1;
  }

  return round;
};

export const paginationOptions = (pageElements: number, page: number) => {

  //offset = desde donde quiero empezar a retornar la data
  const offset = (page - 1) * pageElements;
  const limit = pageElements;
  const filter = `limit=${limit}&offset=${offset}`;

  return filter;
}