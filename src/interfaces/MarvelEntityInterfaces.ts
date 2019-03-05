export interface Base {
  id: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface Character extends Base {
  name: string;
}

export interface Event extends Base {
  characters: Character[];
  title: string;
}

export interface Series extends Base {
  title: string;
}
