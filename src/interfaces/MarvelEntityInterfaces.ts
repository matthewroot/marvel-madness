export interface Base {
  id: string;
  description: string;
  thumbnail: { path: string; extension: string };
  comics: MarvelCollection[];
  stories: MarvelCollection[];
}

interface MarvelCollection {
  available: number;
  items: any;
  collectionURI: string;
}

export interface Character extends Base {
  name: string;
  events: MarvelCollection[];
  series: MarvelCollection[];
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
