export const getWikipediaMobileUrl = (url: string) => {
  return url !== undefined ? url.replace('wikipedia', 'm.wikipedia') : '';
};
