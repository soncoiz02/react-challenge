export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieItemType
  extends Omit<
    Movie,
    | "belongs_to_collection"
    | "budget"
    | "homepage"
    | "imdb_id"
    | "original_language"
    | "original_title"
    | "production_companies"
    | "production_countries"
    | "revenue"
    | "runtime"
    | "spoken_languages"
    | "status"
    | "tagline"
  > {
  genre_ids: number[];
}

export interface ResponseListMovies {
  date: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieItemType[];
  total_pages: number;
  total_results: number;
}

export type ParamsGetList = {
  type: string;
  page: number;
  region?: string;
  query?: string;
};

export type MovieVideoType = {
  id: number;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
};
