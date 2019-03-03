const apiKey: string = process.env.REACT_APP_API_KEY || '';
const baseURI: string = 'https://gateway.marvel.com/';
const version: string = 'v1';

export default class MarvelAPI {
  static version() {
    return version;
  }

  static async get(entity: string, entityID?: number, subEntity?: string) {
    let pathElements: string[] = [entity];

    if (entityID) {
      pathElements.push(entityID.toString());
    }

    if (subEntity) {
      pathElements.push(subEntity);
    }

    const path: string = pathElements.join('/');
    const response = await fetch(
      `${baseURI}/${version}/public/${path}?apikey=${apiKey}`
    );
    const json = await response.json();

    return json.data.results;
  }
}
