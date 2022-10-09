import { F1 } from './data-source';

export class DriversData extends F1 {
  constructor() {
    super();
  }

  async getDrivers(pageElements: number = -1, page: number = 1) {
    if (pageElements === -1) {
      return this.get(`drivers.json?limit=1000`, {
        cacheOptions: { ttl: 60 },
      });
    }

    //offset = desde donde quiero empezar a retornar la data
    const offset = page - 1;
    const limit = pageElements;
    const filter = `limit=${limit}&offset=${offset}`;

    return this.get(`drivers.json?${filter}`, {
      cacheOptions: { ttl: 60 },
    });
  }
}
