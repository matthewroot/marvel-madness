const apiKey: string = process.env.REACT_APP_API_KEY || '';
const baseURI: string = 'https://gateway.marvel.com';
const version: string = 'v1';

export default class MarvelAPI {
  static version() {
    return version;
  }

  static async get(query: QueryInterface) {
    let { path, queryParams } = parseQuery(query);

    try {
      const response = await fetch(
        `${baseURI}/${version}/public/${path}?${queryParams}&apikey=${apiKey}`
      );
      const json = await response.json();

      return json.data.results;
    } catch (err) {
      console.log(err);
    }
  }
}

function parseQuery(query: QueryInterface) {
  let pathElements: string[] = [query.entity];
  let paramStrings = [];

  if (query.entityID) {
    pathElements.push(query.entityID.toString());
  }

  if (query.subEntity) {
    pathElements.push(query.subEntity);
  }

  // TODO: update this to handle params that are not strings
  if (query.params) {
    for (const param in query.params) {
      if (query.params.hasOwnProperty(param)) {
        const value: string = query.params[param];

        paramStrings.push(`${param}=${value}`);
      }
    }
  }

  const path: string = pathElements.join('/');
  const queryParams: string = paramStrings.join('&');

  return { path, queryParams };
}

interface QueryInterface {
  entity: string;
  entityID?: string;
  subEntity?: string;
  params?: any;
}
