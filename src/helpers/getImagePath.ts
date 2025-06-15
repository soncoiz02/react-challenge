export const getImagePath = (size: string, path: string) => {
  const baseUrl = import.meta.env.VITE_TMDB_IMAGE_URL;
  return `${baseUrl}/${size}/${path}`;
};
