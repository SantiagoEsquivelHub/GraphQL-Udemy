import { checkRound, checkYear, paginationOptions } from '../lib/utils';
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

    return this.get(`drivers.json?${paginationOptions(pageElements, page)}`, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriversByYear(year: string) {
    year = checkYear(year);

    return await this.get(String(year) + '/drivers.json', {
      //TTL= time to live
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriversByYearAndRound(year: string, round: number) {
    year = checkYear(year);
    round = checkRound(round);

    return await this.get(year + '/' + round + '/drivers.json', {
      //TTL= time to live
      cacheOptions: { ttl: 60 },
    });
  }

  async getDriver(id: string) {
    return await this.get(`/drivers/${id}.json`, {
      //TTL= time to live
      cacheOptions: { ttl: 60 },
    });
  }

}
