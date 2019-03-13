interface MarvelCollection {
  available: number;
  collectionURI: string;
  items: any;
  returned: number;
}

interface MarvelResource {
  name: string;
  resourceURI: string;
}

export interface Base {
  id: string;
  description: string;
  thumbnail: { path: string; extension: string };
  comics: MarvelCollection[];
  stories: MarvelCollection[];
}

export interface Character extends Base {
  name: string;
  events: MarvelCollection[];
  series: MarvelResource[];
}

export interface Comics extends Base {
  characters: MarvelCollection[];
  creators: MarvelCollection[];
  dates: { type: string; date: string }[];
  events: MarvelCollection[];
  pageCount: number;
  prices: { type: string; price: number }[];
  series: MarvelResource[];
  stories: MarvelCollection[];
  title: string;
}

export interface Event extends Base {
  characters: MarvelCollection[];
  creators: MarvelCollection[];
  series: MarvelCollection[];
  title: string;
}

export interface Series extends Base {
  characters: MarvelCollection[];
  creators: MarvelCollection[];
  endYear: number;
  events: MarvelCollection[];
  rating: string;
  startYear: number;
  title: string;
  type: string;
}
