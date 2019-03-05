export interface Base {
  id: string;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
}

export interface Event extends Base {
  characters: any;
}
