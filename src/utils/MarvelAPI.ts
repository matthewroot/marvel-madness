const apiKey: string = process.env.REACT_APP_API_KEY || '';
const baseURI: string = 'https://gateway.marvel.com';
const version: string = 'v1';
const API_LIMIT = 100;

export default class MarvelAPI {
  static version() {
    return version;
  }

  static apiLimit() {
    return API_LIMIT;
  }

  private static async executeGet(query: QueryInterface) {
    let { path, queryParams } = parseQuery(query);

    try {
      const response = await fetch(
        `${baseURI}/${version}/public/${path}?${queryParams}&apikey=${apiKey}`
      );

      const json = await response.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  }

  static async get(query: QueryInterface) {
    try {
      const json = await this.executeGet(query);

      return json.data.results;
    } catch (err) {
      console.log(err);
    }
  }

  static async getAll(query: QueryInterface) {
    let results: any = [];
    let offset = 0;

    query.params = Object.assign(query.params || {}, {
      limit: API_LIMIT,
      offset: offset,
    });

    try {
      let json = await this.executeGet(query);
      let data = json.data;
      const entityCount: number = data.total;
      results = results.concat(data.results);

      while (results.length < entityCount) {
        offset += data.count;
        query.params.offset = offset;
        json = await this.executeGet(query);
        data = json.data;
        results = results.concat(data.results);
      }
    } catch (err) {
      console.log(err);
    }

    return results;
  }
}

function parseQuery(query: QueryInterface): { path: string; queryParams: any } {
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
