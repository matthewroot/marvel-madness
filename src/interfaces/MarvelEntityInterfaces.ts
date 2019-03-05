export interface Base {
  id: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface Event extends Base {
  characters: any;
  title: string;
}

export interface Character extends Base {
  name: string;
}
