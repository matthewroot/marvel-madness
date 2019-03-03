export interface MarvelEventInterface {
  id: string;
  title: string;
  description: string;
  thumbnail: { path: string; extension: string };
  characters: any;
}
