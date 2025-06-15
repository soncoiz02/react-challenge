import type { Movie, MovieVideoType, ParamsGetList, ResponseListMovies } from "../types/movie";
import hostApiIns from "./baseApi";

export const movieServices = {
  getListMovie: async (params: ParamsGetList): Promise<ResponseListMovies> => {
    const { type, page, region, query } = params;
    if (query) {
      return hostApiIns.get(`/search/movie`, { params: { query, page, region } });
    }
    return hostApiIns.get(`/movie/${type}`, { params: { page, region } });
  },

  getDetailMovie: async (id: number): Promise<Movie> => {
    return hostApiIns.get(`/movie/${id}`);
  },

  getMovieVideos: async (id: number): Promise<MovieVideoType> => {
    return hostApiIns.get(`/movie/${id}/videos`, {
      params: { language: "en-US" },
    });
  },

  getSimilarMovies: async (id: number): Promise<ResponseListMovies> => {
    return hostApiIns.get(`/movie/${id}/similar`, { params: { page: 1 } });
  },
};
