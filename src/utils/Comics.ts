import { Comics as ComicsInterface } from '../interfaces/MarvelEntityInterfaces';
import { array } from 'prop-types';

export default class Comics {
  static yearlyAppearances(comics: ComicsInterface[]) {
    let years: any = {};

    comics.forEach(comic => {
      if (comic.dates) {
        const dateObject = comic.dates.find(date => {
          return date.type === 'onsaleDate';
        });

        if (dateObject) {
          const yearMatch = dateObject.date.match(/^\d{4}/);

          if (yearMatch) {
            let yearOnSale: string = yearMatch[0];

            if (years[yearOnSale]) {
              years[yearOnSale]++;
            } else {
              years[yearOnSale] = 1;
            }
          }
        }
      }
    });

    return years;
  }
}
